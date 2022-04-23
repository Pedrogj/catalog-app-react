import { useState } from "react";
import { Spinner } from "../components/spinner/Spinner";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <Spinner /> : null,
    () => setLoading(true), // Mostrar loading
    () => setLoading(false), // Ocultar Loading
  ];
};
