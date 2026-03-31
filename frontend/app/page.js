"use client";

import React, { useState } from 'react'
import Form from '@/components/Form';
import ResultContainer from '@/components/ResultContainer';

const Page = (props) => {

  const [formData, setFormData] = useState({
    country: "",
    cases: "",
    mobility: "",
    vaccination: ""
  })
  const [result, setResult] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function checkRisk(e) {
    e.preventDefault();
    
    const res = await fetch("http://127.0.0.1:8000/predict", {
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
  }
  
  return (
    <>

      {/* <div className=""> */}
        {/* <h1 className="animate-title-reveal bg-linear-to-r from-slate-900 via-blue-700 to-cyan-500 bg-clip-text px-3 text-center text-[2.75rem] font-semibold tracking-tight text-transparent drop-shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]">
          Practice Project
        </h1> */}
      {/* </div> */ /* RANDOM SHIT */}

      <div className='flex gap-10 mt-10 justify-center items-center selection:bg-green-500/50'>

        <Form handleChange={handleChange} checkRisk={(e) => checkRisk(e)}/>

        <ResultContainer result={result}/>

      </div>
    
    </>
  )
}

export default Page
