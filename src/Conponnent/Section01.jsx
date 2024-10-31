import Image from "./Complement/Image";

const Section01 = () => {
  return (
<div className="section01 w-full h-[70vh] flex items-center justify-center mx-auto mt-16 relative px-11">
    <div className="relative">
        <Image
            src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2217.jpg?ga=GA1.1.1057611772.1726437422&semt=ais_hybrid"
            className="w-24 h-24 mx-8 rounded-full"
        />
        <div className="absolute top-0 left-[-75px] w-28 h-28 border-8 border-green-700 rounded-full"></div>
        <div className="absolute top-28 left-[-85px] w-14 h-14 border-8 border-green-700 rounded-full"></div>
    </div>
    <div className="text-center ml-8">
        <h1 className="font-bold text-gray-50 text-4xl text-start">
            Bonjour, je suis Salah Eddine Toiati <span className="text-green-700">:)</span> <br />
            Développeur Full Stack.
        </h1>
    </div>
</div>

  )
}

export default Section01
