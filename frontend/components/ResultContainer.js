const ResultContainer = ({ result }) => {
  return (
<div className="group rounded-[calc(1.5rem+2px)] p-0.5 bg-transparent transition-all duration-300 hover:bg-linear-to-r hover:from-green-500 hover:to-cyan-500 hover:-translate-y-1">
    
    <div className='flex flex-col justify-center items-center shadow-lg bg-slate-800/90 backdrop-blur-md rounded-3xl p-8 w-105 h-125 text-center transition-all duration-200 ease-in group-hover:shadow-2xl'>
            <h1 className="text-[3.5rem] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] text-white/75 transition-all ease duration-200 font-bold">Results:</h1>
            <p className="mt-5 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all text-white/65 ease duration-200 text-[2rem] font-semibold">{result}</p>

        </div>
    </div>
  );
}

export default ResultContainer