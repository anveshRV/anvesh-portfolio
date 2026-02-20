import React from "react";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {portfolio.name}</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-white" href={portfolio.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
