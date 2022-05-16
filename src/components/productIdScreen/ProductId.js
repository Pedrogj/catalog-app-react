import React, { useContext, useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { BsWhatsapp } from "react-icons/bs";
import {
  ContentBoton,
  ButtonExit,
  Box,
  ImgContent,
  Img,
  TextContent,
  TextH2,
  Description,
  Button,
} from "./ProductIdStyle";
import { routes } from "../../routers/Routes";

export const ProductId = () => {
  const phone = process.env.REACT_APP_MESSAGE;

  const navigate = useNavigate();

  const { getProductById } = useContext(DataContext);

  const { productId } = useParams();

  const product = useMemo(() => getProductById(productId), [productId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!product) {
    return <Navigate to={routes.root} />;
  }

  const goToWhatsapp = `https://api.whatsapp.com/send?phone=${phone}&text=hola%20Ferromaster%20quiero%20consultar%20el%20Precio%20de:%20${product.name}`;

  return (
    <>
      <ContentBoton>
        <ButtonExit onClick={handleReturn}>Atras</ButtonExit>
      </ContentBoton>
      <Box>
        <ImgContent>
          <Img src={product.img} alt={product.name} />
        </ImgContent>
        <TextContent>
          <TextH2>{product.name}</TextH2>
          <TextH2>${product.price}</TextH2>
          <Description>{product.description}</Description>
          <Button target="_blank" rel="noreferrer" href={goToWhatsapp}>
            <BsWhatsapp /> Consulta
          </Button>
        </TextContent>
      </Box>
    </>
  );
};
