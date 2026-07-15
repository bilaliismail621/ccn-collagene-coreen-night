"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/produit", label: "Produit" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          CCN
        </Link>
        <nav className="hidden gap-8 md:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-blush-500">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/produit"
            className="hidden items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white hover:bg-neutral-700 md:flex"
          >
            <ShoppingBag size={16} /> Acheter
          </Link>
          <button
            className="md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t bg-white px-4 py-4 md:hidden" aria-label="Navigation mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">
              {l.label}
            </Link>
          ))}
          <Link href="/produit" onClick={() => setOpen(false)} className="rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-semibold text-white">
            Acheter
          </Link>
        </nav>
      )}
    </header>
  );
}
