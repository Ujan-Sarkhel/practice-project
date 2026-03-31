"use client";

import React, { useState } from "react";
import Form from "@/components/Form";
import ResultContainer from "@/components/ResultContainer";

const initialFormData = {
  country: "",
  cases: "",
  mobility: "",
  vaccination: ""
};

export default function Page() {
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function checkRisk(e) {
    e.preventDefault();

    const res = await fetch("https://practice-project-v4en.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        country: formData.country,
        cases: Number(formData.cases),
        mobility: Number(formData.mobility),
        vaccination: Number(formData.vaccination)
      })
    });

    const data = await res.json();
    setResult(data.data.risk_level);
    setFormData(initialFormData);
  }

  return (
    <main className="scroll-smooth relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_85%_12%,_rgba(16,185,129,0.16),_transparent_24%),linear-gradient(160deg,_#07111f_0%,_#0b1b2f_42%,_#061018_100%)] px-6 pb-16 pt-32 text-white selection:bg-green-500/50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-28 h-80 w-80 rounded-full bg-emerald-400/18 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 rounded-[32px] border border-white/12 bg-white/8 p-8 shadow-[0_30px_100px_rgba(2,12,27,0.45)] backdrop-blur-2xl lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100">
              Pandemic Risk Predictor
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Turn outbreak signals into a quick AI-powered risk reading.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200/85 sm:text-lg">
              Enter country context, reported cases, mobility, and vaccination data. The app sends your input to a FastAPI backend and returns a simple risk level from the model so the result feels readable instead of overly technical.
            </p>
          </div>

          <div className="grid gap-3 self-end sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Input</p>
              <p className="mt-2 text-sm text-slate-100">Cases, mobility, vaccination, and country.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">Backend</p>
              <p className="mt-2 text-sm text-slate-100">FastAPI validates data and runs prediction logic.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/25 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">Output</p>
              <p className="mt-2 text-sm text-slate-100">A clear Low, Medium, or High risk result.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Form formData={formData} handleChange={handleChange} checkRisk={checkRisk} />
          <ResultContainer result={result} />
        </div>
      </section>
    </main>
  );
}
