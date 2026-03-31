const pillars = [
  {
    title: "Frontend",
    badge: "Your Side",
    description:
      "The interface focuses on making prediction inputs feel approachable, clear, and visually engaging for users who just want a quick answer."
  },
  {
    title: "Backend",
    badge: "Teammate",
    description:
      "The API receives the submitted values, validates them, and passes the cleaned data into the prediction pipeline."
  },
  {
    title: "AI Model",
    badge: "Core Idea",
    description:
      "The model estimates outbreak risk from case count, mobility, and vaccination data, then maps the output into Low, Medium, or High risk."
  }
];

const highlights = [
  "Built as a collaborative beginner project to learn AI and modern web development together.",
  "Designed around an outbreak risk workflow, from user input to prediction response.",
  "Focused on turning a raw model output into something people can understand quickly."
];

const stack = [
  "Next.js App Router",
  "Tailwind CSS",
  "FastAPI",
  "Pandas + Joblib",
  "Machine Learning Prediction Flow"
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_85%_15%,_rgba(16,185,129,0.16),_transparent_26%),linear-gradient(160deg,_#07111f_0%,_#0b1b2f_45%,_#061018_100%)] px-6 pb-16 pt-32 text-white selection:bg-green-500/50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-5rem] top-32 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[32px] border border-white/15 bg-white/10 p-8 shadow-[0_25px_80px_rgba(2,12,27,0.45)] backdrop-blur-2xl sm:p-10">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              About This Project
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              A beginner-built AI outbreak risk app with a clean frontend, a working backend, and a lot of curiosity.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg">
              This project is a team effort between a frontend developer and a backend developer who are both just getting started in AI and web development. The goal is simple: take key outbreak-related inputs, run them through a prediction model, and return a risk level in a way that feels understandable rather than intimidating.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100">
                Frontend + Backend Collaboration
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100">
                AI Learning Project
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100">
                Pandemic Risk Prediction
              </span>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/15 bg-white/8 p-8 shadow-[0_20px_60px_rgba(2,12,27,0.38)] backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
              Why We Made It
            </p>

            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/25 p-4 text-sm leading-7 text-slate-200/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_20px_60px_rgba(2,12,27,0.3)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100">
                {pillar.badge}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200/85">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[32px] border border-white/15 bg-white/10 p-8 shadow-[0_20px_60px_rgba(2,12,27,0.35)] backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
              How It Works
            </p>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-200/90">
              <li className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                The user enters country, case count, mobility, and vaccination information in the frontend.
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                The frontend sends the input to the FastAPI backend, where the request is validated.
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                The backend runs the values through the trained model and converts the numeric prediction into a risk label.
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                The result comes back to the UI so the user sees a quick, readable response.
              </li>
            </ol>
          </section>

          <section className="rounded-[32px] border border-white/15 bg-[linear-gradient(145deg,rgba(34,211,238,0.16),rgba(255,255,255,0.08),rgba(16,185,129,0.14))] p-8 shadow-[0_24px_80px_rgba(2,12,27,0.4)] backdrop-blur-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
              Current Stack
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stack.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/12 bg-slate-950/25 px-4 py-4 text-sm font-medium text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/15 bg-slate-950/30 p-6">
              <p className="text-lg font-semibold text-white">Where we are right now</p>
              <p className="mt-3 text-sm leading-7 text-slate-200/85">
                We are still early in the journey, which is exactly what makes this project exciting. It is not just about getting a prediction on screen. It is about learning how design, APIs, validation, and machine learning all connect in one real product.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
