const riskStyles = {
  High: "from-rose-400/30 to-orange-400/20 text-rose-100 border-rose-300/20",
  Medium: "from-amber-400/30 to-yellow-300/20 text-amber-100 border-amber-300/20",
  Low: "from-emerald-400/30 to-cyan-400/20 text-emerald-100 border-emerald-300/20"
};

const ResultContainer = ({ result }) => {
  const hasResult = Boolean(result);
  const tone = riskStyles[result] || "from-white/10 to-white/5 text-slate-100 border-white/12";

  return (
    <div className="rounded-[30px] border border-white/12 bg-white/8 p-1 shadow-[0_24px_80px_rgba(2,12,27,0.35)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-full min-h-[520px] flex-col justify-between rounded-[26px] border border-white/10 bg-slate-950/30 p-8 sm:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
            Prediction Output
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Model result</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200/80">
            Once the request is processed, your risk level appears here as a simple, readable outcome.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-1 flex-col items-center justify-center rounded-[28px] border bg-linear-to-br px-6 py-10 text-center ${tone}`}
        >
          <p className="text-sm uppercase tracking-[0.26em] text-white/65">Risk Level</p>
          <p className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {hasResult ? result : "Waiting"}
          </p>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-100/75">
            {hasResult
              ? "The prediction has been returned from the backend and mapped into a user-friendly risk label."
              : "Submit the form on the left to generate a prediction from the outbreak risk model."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultContainer;
