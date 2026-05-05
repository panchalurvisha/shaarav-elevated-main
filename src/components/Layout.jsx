import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
