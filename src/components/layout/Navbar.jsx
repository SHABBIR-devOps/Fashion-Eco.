import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Heart, Search, Menu, User } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { useAuth } from "../../hooks/useAuth";
import SearchBar from "./SearchBar";

const NAV_LINKS = [
  { label: "Men", to: "/category/men" },
  { label: "Women", to: "/category/women" },
  { label: "Kids", to: "/category/kids" },
  { label: "Accessories", to: "/category/accessories" },
  { label: "Try-On", to: "/virtual-try-on" },
];

export default function Navbar({ onOpenMobileMenu }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();
  const { count: wishCount } = useWishlist();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-paper/95 dark:bg-dark-bg/95 backdrop-blur border-b border-line dark:border-dark-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button className="md:hidden p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" onClick={onOpenMobileMenu} aria-label="Open menu">
            <Menu size={22} />
          </button>

          <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight font-semibold">
            FORME
          </Link>

          <nav className="hidden md:flex items-center gap-7 font-body text-[13px] tracking-wide uppercase">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="text-ink-soft hover:text-ink dark:hover:text-paper transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-1 hidden sm:block focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" onClick={() => setSearchOpen((s) => !s)} aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className="p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt"
              onClick={() => navigate(isAuthenticated ? "/profile" : "/login")}
              aria-label="Account"
            >
              <User size={19} />
            </button>
            <Link to="/wishlist" className="p-1 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" aria-label="Wishlist">
              <Heart size={19} />
              {wishCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] w-4 h-4 rounded-full bg-clay text-white flex items-center justify-center font-mono">
                  {wishCount}
                </span>
              )}
            </Link>
            <button className="p-1 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-cobalt" onClick={openCart} aria-label="Open cart">
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] w-4 h-4 rounded-full bg-cobalt text-white flex items-center justify-center font-mono">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="pb-4 hidden sm:block">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
