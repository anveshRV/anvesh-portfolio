import React, { useState } from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

function Chevron({ open }) {
  return (
    <span
      className={`inline-block transition-transform ${
        open ? "rotate-90" : ""
      }`}
    >
      ▶
    </span>
  );
}

export default function Education() {
  const [open, setOpen] = useState({});

  function toggle(key) {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-white">Education</h1>
      <p className="mt-2 text-white/65">Click to reveal coursework.</p>

      <div className="mt-10 space-y-5">
        {(portfolio.education || []).map((e) => {
          const key = `${e.school}-${e.degree}`;
          const isOpen = !!open[key];

          return (
            <div
              key={key}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white/5 flex-shrink-0">
                    {e.logo && (
                      <img
                        src={e.logo}
                        alt={`${e.school} logo`}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {e.school}
                    </h2>
                    <p className="text-sm text-white/70">{e.degree}</p>
                  </div>
                </div>

                <p className="text-sm text-white/55">{e.dates}</p>
              </div>

              <button
                onClick={() => toggle(key)}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80 hover:bg-black/30"
              >
                <Chevron open={isOpen} />
                {isOpen ? "Hide coursework" : "View coursework"}
              </button>

              {isOpen && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  {Array.isArray(e.coursework) && e.coursework.length ? (
                    <div className="flex flex-wrap gap-2">
                      {e.coursework.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-white/60">
                      Add <code className="text-white/80">coursework</code> in{" "}
                      <code className="text-white/80">
                        src/data/portfolio.js
                      </code>
                      .
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
