import { Link } from "react-router-dom";
import logo from "@/assets/logo-mark.png";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export const Footer = () => (
  <footer className="bg-cocoa text-paper">
    <div className="container-x py-20 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shaarav" className="h-10 w-10 invert opacity-90" width={40} height={40} />
          <div>
            <div className="font-display text-2xl">SHAARAV</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-paper/60">Global Ventures</div>
          </div>
        </div>
        <p className="mt-6 text-paper/70 max-w-sm leading-relaxed">
          Authentic Indian spices, sourced from trusted farms and exported with uncompromising care to kitchens across the world.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="p-2 border border-paper/20 hover:border-primary hover:text-primary transition" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="#" className="p-2 border border-paper/20 hover:border-primary hover:text-primary transition" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="#" className="p-2 border border-paper/20 hover:border-primary hover:text-primary transition" aria-label="Facebook"><Facebook size={16} /></a>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-4">Explore</div>
        <ul className="space-y-2 text-paper/80">
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/products" className="hover:text-primary">Products</Link></li>
          <li><Link to="/quality" className="hover:text-primary">Quality</Link></li>
          <li><Link to="/sustainability" className="hover:text-primary">Sustainability</Link></li>
          <li><Link to="/export" className="hover:text-primary">Export</Link></li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-4">Catalogue</div>
        <ul className="space-y-2 text-paper/80">
          <li>Whole Spices</li>
          <li>Powdered Spices</li>
          <li>Masala Blends</li>
          <li>Herbs & Seeds</li>
          <li>Private Label</li>
        </ul>
      </div>
      <div className="md:col-span-3">
        <div className="text-xs uppercase tracking-[0.25em] text-paper/50 mb-4">Contact</div>
        <ul className="space-y-3 text-paper/80 text-sm">
          <li className="flex gap-3"><MapPin size={16} className="mt-1 shrink-0" /> Shaarav Global Ventures, Mumbai, India</li>
          <li className="flex gap-3"><Phone size={16} className="mt-1 shrink-0" /> +91 98765 43210</li>
          <li className="flex gap-3"><Mail size={16} className="mt-1 shrink-0" /> hello@shaaravglobal.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-paper/10">
      <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-paper/50">
        <div>© {new Date().getFullYear()} Shaarav Global Ventures. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
