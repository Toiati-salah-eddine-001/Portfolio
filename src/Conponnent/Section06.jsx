import "./Section06.css";
// import Barcode from "Barcode.jpg"

function Section06() {
  return (
    <div className="flex  justify-center sec06 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 mt-9">Project</h1>
        <p className="text-lg font-light mb-6">
          Vous pouvez voir tous mes projets dans mon GitHub
        </p>

        <div className="flex items-center justify-center space-x-10 h-[80vh]  gap-80">
          {/* GitHub Icon */}
          <a
            href="https://github.com/Toiati-salah-eddine-001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300 h-60 w-60"
          >
            <img
              src="Github.png"
              alt="GitHub"
              className="w-full h-full object-contain rounded-full p-6"
            />
          </a>

          {/* QR Code */}
          <a
  href="https://github.com/Toiati-salah-eddine-001"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-xl transition duration-300 w-96 h-60"
>
  <img
    // src="barcode.gif"
    src="Barcode.png"
    alt="QR Code"
    className="w-48 h-48 border-4 border-gray-700 rounded-lg" // Increased size to w-48 and h-48
  />
</a>

        </div>
      </div>
    </div>
  );
}

export default Section06;
