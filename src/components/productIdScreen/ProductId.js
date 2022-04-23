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
  TextH1,
  Description,
  Button,
} from "./ProductIdStyle";

export const ProductId = () => {
  const navigate = useNavigate();

  const { getProductById } = useContext(DataContext);

  const { productId } = useParams();

  const product = useMemo(() => getProductById(productId), [productId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!product) {
    return <Navigate to="/" />;
  }

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
          <TextH1>{product.name}</TextH1>
          <Description>{product.description}</Description>
          <Button
            target="_blank"
            rel="noreferrer"
            href={`https://api.whatsapp.com/send?phone=56936672189&text=hola%20Ferromaster%20quiero%20consultar%20el%20Precio%20de%20${product.name}`}
          >
            <BsWhatsapp /> Consulta
          </Button>
        </TextContent>
      </Box>
    </>
  );
};
