import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [pathname]);

  return null;
};
