import React from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

function Dot() {
  return (
    <div className="mt-2 h-3 w-3 rounded-full bg-sky-500 ring-4 ring-sky-500/20" />
  );
}

export default function Works() {
  return (
    <Container>
      <div>
        <h1 className="text-3xl font-bold text-white">Experience</h1>
        <p className="mt-2 text-white/65">Timeline view with outcomes.</p>
      </div>

      <div className="mt-10 relative">
        <div className="absolute left-[7px] top-0 h-full w-px bg-white/10" />

        <div className="space-y-8">
          {(portfolio.works || []).map((w) => (
            <div key={`${w.role}-${w.org}`} className="relative pl-10">
              <div className="absolute left-0 top-0">
                <Dot />
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-white/5 flex-shrink-0">
                      {w.logo && (
                        <img
                          src={w.logo}
                          alt={`${w.org} logo`}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {w.role}
                      </h2>
                      <p className="text-sm text-white/65">{w.org}</p>
                    </div>
                  </div>

                  <p className="text-sm text-white/55">{w.date}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                  {(w.bullets || []).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {!portfolio.works?.length && (
          <p className="mt-8 text-white/60">
            No experience found. Check <code className="text-white/80">portfolio.works</code>.
          </p>
        )}
      </div>
    </Container>
  );
}
