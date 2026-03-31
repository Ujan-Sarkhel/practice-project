const fields = [
  {
    name: "country",
    type: "text",
    placeholder: "Enter country"
  },
  {
    name: "cases",
    type: "number",
    placeholder: "Enter cases"
  },
  {
    name: "mobility",
    type: "number",
    placeholder: "Enter mobility"
  },
  {
    name: "vaccination",
    type: "number",
    placeholder: "Enter vaccination %"
  }
];

const Form = ({ formData, handleChange, checkRisk }) => {
  return (
    <div className="rounded-[30px] border border-white/12 bg-white/8 p-1 shadow-[0_24px_80px_rgba(2,12,27,0.35)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1">
      <form
        className="flex h-full flex-col rounded-[26px] border border-white/10 bg-slate-950/30 p-8 sm:p-10"
        onSubmit={checkRisk}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
          Risk Input Form
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Run a prediction</h2>
        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200/80">
          Fill in the project inputs below and send them to the model. The backend will validate the data before returning a readable risk level.
        </p>

        <div className="mt-8 grid gap-4">
          {fields.map((field) => (
            <label key={field.name} className="grid gap-2">
              <span className="text-sm font-medium capitalize text-slate-100">
                {field.name}
              </span>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-300/45 focus:border-cyan-400/60 focus:bg-white/14 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
              />
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold tracking-[0.18em] text-slate-950 transition-all duration-300 hover:scale-[1.01] hover:brightness-110 hover:shadow-[0_12px_35px_rgba(16,185,129,0.28)] active:scale-[0.99]"
        >
          CHECK RISK
        </button>
      </form>
    </div>
  );
};

export default Form;
