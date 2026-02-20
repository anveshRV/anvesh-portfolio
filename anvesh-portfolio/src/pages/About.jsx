import React from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="mt-2 text-white/65">
        My focus is building practical AI systems with strong engineering foundations.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Story</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            I work across AI/ML and full-stack development, with experience deploying real systems
            that people depend on. I like projects where model performance and product UX both matter.
          </p>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Recently, I’ve been building NLP assistants, deploying on cloud, and improving system latency and reliability.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="mt-4 space-y-4">
            {Object.entries(portfolio.skills).map(([k, v]) => (
              <div key={k}>
                <div className="text-sm font-semibold text-white/80">{k}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {v.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
