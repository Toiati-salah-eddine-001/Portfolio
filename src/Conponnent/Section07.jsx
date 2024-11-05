
const Section07 = () => {
  return (
<div className="h-[70vh] flex flex-col items-center justify-center bg-gray-900"> {/* Set to full height and matching color */}
    <h1 className="text-3xl font-semibold text-white mb-6">Contact</h1>
    <div className="flex items-center justify-center  rounded-lg shadow-lg p-6 space-x-6 bg-slate-100 w-80 h-40"> {/* Updated background color */}
        
        <a href="https://www.linkedin.com" className=" flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold w-24 h-24">
            in
        </a>

        <div className="h-16 w-px bg-green-500"></div>

        <a href="cv-link.pdf" className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 text-xl font-bold">
            CV
        </a>
    </div>
</div>
  )
}

export default Section07
