const Form = ({ handleChange, checkRisk }) => {
  return (
<div className="rounded-[calc(1.5rem+2px)] p-0.5 bg-transparent transition-all duration-300 hover:bg-linear-to-r hover:from-cyan-500 hover:to-green-500 hover:-translate-y-1 group">
    
    <form 
        className='flex flex-col gap-5 shadow-lg bg-white rounded-3xl p-8 w-105 min-h-125 justify-center items-center transition-all duration-200 ease-in group-hover:shadow-2xl' 
        onSubmit={checkRisk}>     
            <h1 className='text-[2.5rem] font-bold'>Form</h1>

            <input name="country" type='text' placeholder='Enter Country Name' onChange={handleChange}
                className='w-50 border-3 rounded-[30px] text-center p-1.5'></input>

            <input name="cases" type='text' placeholder='Enter Cases' onChange={handleChange}
                className='w-50 border-3 rounded-[30px] text-center p-1.5'></input>

            <input name="mobility" type='text' placeholder='Enter Mobility' onChange={handleChange} 
                className='w-50 border-3 rounded-[30px] text-center p-1.5'></input>

            <input name="vaccination" type='text' placeholder='Enter Vaccination' onChange={handleChange} 
                className='w-50 border-3 rounded-[30px] text-center p-1.5'></input>
            
            <button type='submit' className='mt-2 bg-linear-to-r from-cyan-500 to-green-500 p-3 w-40 rounded-[20px] transition-all duration-300 ease-in-out hover:bg-linear-to-r hover:scale-105 hover:shadow-md active:scale-95 active:shadow-'>CHECK RISK</button>

        </form>
    </div>
  )
}

export default Form