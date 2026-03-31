import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 selection:bg-green-500/50 -translate-x-1/2 z-50 w-[90%] max-w-4xl 
                bg-slate-900/40 backdrop-blur-xl border border-white/10 
                rounded-2xl px-6 py-3 flex items-center justify-between 
                shadow-2xl shadow-cyan-500/5">
    
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-tight">
        Pandemic<span className="text-cyan-400">.</span>
        </div>

        {/* Nav Links */}
        <div className="flex gap-2">
        <Link href="/">
            <button className="px-4 py-2 rounded-xl text-slate-200 text-sm font-medium 
                                transition-all duration-300 
                                hover:bg-linear-to-r hover:from-cyan-500/20 hover:to-green-500/20 
                                hover:text-cyan-300 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)]
                                border border-transparent hover:border-cyan-500/30">
                Home
            </button>
        </Link>
        
        <Link href="/about">
            <button className="px-4 py-2 rounded-xl text-slate-200 text-sm font-medium 
                                transition-all duration-300 
                                hover:bg-linear-to-r hover:from-cyan-500/20 hover:to-green-500/20 
                                hover:text-cyan-300 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)]
                                border border-transparent hover:border-cyan-500/30">
                About
            </button>
        </Link>

        {/* CTA Button */}
        <Link href="https://github.com/Ujan-Sarkhel/practice-project.git">
            <button className="ml-4 px-5 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-green-500 
                                text-slate-950 text-sm font-bold transition-all ease-in duration-200 
                                active:scale-95 hover:brightness-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                Github Repo
            </button>
        </Link>
        </div>
    </nav>

  )
}

export default Navbar