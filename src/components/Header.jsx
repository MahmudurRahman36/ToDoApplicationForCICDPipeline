const Header = () => {
  return (
    <header className="text-center mb-10 animate-fade-in">
      <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
        Productivity Tool
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 font-outfit">
        Task<span className="text-blue-600">Master</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-md mx-auto">
        Stay organized, focused, and productive with our sleek task management solution.
      </p>
    </header>
  )
}

export default Header
