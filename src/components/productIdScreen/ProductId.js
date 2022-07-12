import { useContext, useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { useLoadingPages } from "../../hooks/useLoadingPages";
import { BsWhatsapp } from "react-icons/bs";
import {
  ContentButton,
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
import { Spinner } from "../spinner/Spinner";

export const ProductId = () => {
  const phone = process.env.REACT_APP_MESSAGE;

  const [loading] = useLoadingPages();

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

  const message = "&text=hola%20Ferromaster%20esta%20disponible:%20";

  const goToWhatsapp = `https://api.whatsapp.com/send?phone=${phone}${message}${product.name}?`;

  const renderProductsDetail = (
    <>
      <ContentButton>
        <ButtonExit onClick={handleReturn}>Atras</ButtonExit>
      </ContentButton>
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

  const requireContent = !loading ? <Spinner /> : renderProductsDetail;

  return <>{requireContent}</>;
};
