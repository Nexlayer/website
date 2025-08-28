import { Zap, Boxes, Globe, Gauge, ShieldCheck, Terminal, Power } from "lucide-react"
import Apple from "./logos/Apple"
import Google from "./logos/Google"
import Discord from "./logos/Discord"
import Netflix from "./logos/Netflix"

export const FeaturesGridSection = () => {
  return (
    <>
      <section className="px-4 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              {"Production-ready in one prompt."}
            </h2>
            <p className="mt-3 text-zinc-400">From MVP to production in minutes. Scalable. Reliable. Secure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Deploy in One Prompt */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                  <Zap className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Full-Stack by Default</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Ship Next.js, Flask, Django, FastAPI, or any stack — not just static sites.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
            </div>

            {/* Containerized by Default */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                  <Boxes className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">AI-Powered Ready</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Connect APIs and AI models out-of-the-box. Your app can call OpenAI, Claude, Modal, TogetherAI, or
                    Llama instantly.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
            </div>

            {/* Global Scale, Zero Setup */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                  <Globe className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Deploy in One Prompt</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    From repo to live URL in minutes with the Nexlayer Model Context Protocol.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
            </div>

            {/* Blazing Fast Performance */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                  <Gauge className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Scales Automatically</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Containers scale to millions of users. No cold starts, no extra config.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
            </div>

            {/* High Availability */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Always On + Secure</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Automatic failover, isolation, and self-healing. Enterprise-grade by default.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
            </div>

            {/* Built for Builders & Agents */}
            <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                  <Terminal className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Built for Agents &amp; Devs</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Works with Cursor, Claude Code, Windsurf, Copilot or your AI-powered CLI. Agents build, Nexlayer
                    ships.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
            </div>
          </div>

          <div className="mt-16 group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-8 transition hover:border-zinc-700 hover:bg-zinc-900/80">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 shadow-sm">
                <Power className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
                  What once took massive teams of engineers, millions of dollars, and years of time at{" "}
                  <span className="inline-flex items-center gap-3 mx-2">
                    <Apple className="h-6 w-6" />
                    <Google className="h-6 w-6" />
                    <a
                      href="https://discord.gg/Xr7f2tk3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Discord className="h-6 w-6" />
                    </a>
                    <Netflix className="h-6 w-6" />
                  </span>
                  … with Nexlayer, now takes one prompt.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:translate-y-6" />
          </div>
        </div>
      </section>
    </>
  )
}
