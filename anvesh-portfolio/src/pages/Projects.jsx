import React, { useMemo, useState } from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function StatusBadge({ status }) {
  const s = (status || "").toLowerCase();
  const cls =
    s === "live"
      ? "bg-emerald-500/15 text-emerald-200 border-emerald-500/25"
      : s === "in progress"
      ? "bg-amber-500/15 text-amber-200 border-amber-500/25"
      : "bg-white/10 text-white/70 border-white/15";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${cls}`}>
      {status || "Completed"}
    </span>
  );
}

export default function Projects() {
  const projects = Array.isArray(portfolio?.projects) ? portfolio.projects : [];
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");

  const types = useMemo(() => {
    const set = new Set(projects.map((p) => p?.type).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      const okType = type === "All" ? true : p?.type === type;
      const blob = [
        p?.title,
        p?.summary,
        ...(p?.stack || []),
        ...(p?.impact || []),
        p?.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const okQuery = query ? blob.includes(query) : true;
      return okType && okQuery;
    });
  }, [projects, q, type]);

  return (
    <Container>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="mt-2 text-white/65">Badges + cleaner cards.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search (e.g., SQL, Tableau, Spring Boot)"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/20 sm:w-80"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none"
          >
            {types.map((t) => (
              <option key={t} value={t} className="bg-[#0b1220]">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <div
            key={p.title}
            className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                <p className="mt-1 text-sm text-white/55">
                  {p.year} • {p.type}
                </p>
              </div>
              <StatusBadge status={p.status} />
            </div>

            <p className="mt-4 text-sm text-white/70">{p.summary}</p>

            {Array.isArray(p.impact) && p.impact.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  Impact
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">
                  {p.impact.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(p.stack) && p.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            )}

            <div className="mt-5 flex gap-4 text-sm">
              {p.links?.github ? (
                <a
                  className="font-semibold text-sky-300 hover:text-sky-200"
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : (
                <span className="text-white/35">GitHub (add link)</span>
              )}

              {p.links?.demo ? (
                <a
                  className="font-semibold text-sky-300 hover:text-sky-200"
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              ) : (
                <span className="text-white/35">Demo (add link)</span>
              )}
            </div>
          </div>
        ))}

        {!filtered.length && (
          <p className="text-white/60">No projects matched. Clear search/filter.</p>
        )}
      </div>
    </Container>
  );
}
