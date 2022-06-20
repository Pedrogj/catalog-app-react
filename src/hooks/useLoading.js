import { useState } from "react";
import { Spinner } from "../components/spinner/Spinner";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <Spinner /> : false,
    () => setLoading(true), // Mostrar loading
    () => setLoading(false), // Ocultar Loading
  ];
};
