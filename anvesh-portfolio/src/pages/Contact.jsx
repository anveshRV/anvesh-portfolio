import React from "react";
import Container from "../components/Container";
import { portfolio } from "../data/portfolio";

export default function Contact() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-white/65">Let’s talk about roles, projects, or collaborations.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Direct</h2>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <div>
              <span className="text-white/50">Email: </span>
              <a className="text-sky-300 hover:text-sky-200" href={`mailto:${portfolio.email}`}>
                {portfolio.email}
              </a>
            </div>
            <div>
              <span className="text-white/50">LinkedIn: </span>
              <a className="text-sky-300 hover:text-sky-200" href={portfolio.linkedin} target="_blank" rel="noreferrer">
                Message me
              </a>
            </div>
            <div>
              <span className="text-white/50">GitHub: </span>
              <a className="text-sky-300 hover:text-sky-200" href={portfolio.github} target="_blank" rel="noreferrer">
                See work
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Quick message</h2>
          <p className="mt-2 text-sm text-white/60">
            This is a UI-only form. If you want, I can connect it to EmailJS or a Netlify form.
          </p>

          <form className="mt-4 space-y-3">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
              placeholder="Your name" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
              placeholder="Your email" />
            <textarea className="h-28 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none"
              placeholder="Your message" />
            <button type="button"
              className="w-full rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-black hover:bg-sky-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
