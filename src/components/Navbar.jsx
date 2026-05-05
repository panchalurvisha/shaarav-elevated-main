import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/export", label: "Export" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shaarav" className="h-10 w-10" width={40} height={40} />
          <div className="leading-none">
            <div className="font-display text-xl tracking-wide text-cocoa">SHAARAV</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Global Ventures</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? "text-primary font-medium" : "text-cocoa/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-sm px-5 py-2.5 bg-primary text-primary-foreground hover:bg-cocoa transition-colors"
          >
            Request Quote
          </Link>
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-paper border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-primary font-medium" : "text-cocoa/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
