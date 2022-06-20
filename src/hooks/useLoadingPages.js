import { useState, useEffect } from "react";

export const useLoadingPages = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return [loading];
};
