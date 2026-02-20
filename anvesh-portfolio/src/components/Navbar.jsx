import React from "react";
import { NavLink, Link } from "react-router-dom";
import { portfolio } from "../data/portfolio";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Works", to: "/works" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          <span className="text-sky-400">{portfolio.brand}</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                [
                  "text-sm font-medium transition",
                  isActive ? "text-sky-300" : "text-white/70 hover:text-white",
                ].join(" ")
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={portfolio.resume}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
