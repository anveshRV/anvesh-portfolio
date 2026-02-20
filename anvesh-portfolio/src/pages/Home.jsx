import React from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";
import { Link } from "react-router-dom";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Home() {
  const { hero, highlights } = portfolio;

  return (
    <Container>
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <div className="text-sm font-semibold tracking-widest text-sky-300">
            {hero.greeting}
          </div>

          <h1 className="mt-4 text-5xl font-semibold leading-tight">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/70">
            {hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {hero.ctas.map((c) =>
              c.kind === "primary" ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-black hover:bg-sky-300"
                >
                  {c.label}
                </a>
              ) : (
                <Link
                  key={c.label}
                  to={c.href}
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {c.label}
                </Link>
              )
            )}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {hero.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-semibold">{s.value}</div>
                <div className="mt-1 text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right illustration panel */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-sky-500/20 via-white/5 to-purple-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/80">What I do</div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-base font-semibold">{h.title}</div>
                  <p className="mt-2 text-sm text-white/70">{h.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {h.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-white/50">
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
