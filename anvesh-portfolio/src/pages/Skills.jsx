import React from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

function SkillPill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Skills() {
  const groups = portfolio.skills || {};

  return (
    <Container>
      <h1 className="text-3xl font-bold text-white">Skills</h1>
      <p className="mt-2 text-white/65">Grouped for quick scanning.</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {Object.entries(groups).map(([group, items]) => (
          <div key={group} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-base font-semibold text-white">{group}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {(items || []).map((s) => (
                <SkillPill key={s}>{s}</SkillPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
