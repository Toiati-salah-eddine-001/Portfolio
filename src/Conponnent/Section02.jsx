import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Section02 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="bg-gray-900 py-16 flex justify-center">
      <div className="ection 02 flex ">
        <div className="Prt1 w-[600px]">
          <div
            className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <p>
              Jadopte une approche centrée sur lutilisateur, avec une attention
              particulière aux détails techniques et à la maintenabilité du
              code. Chaque projet est une opportunité dallier esthétique et
              performance.
            </p>
          </div>
          <div className="bg-transparant text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"></div>
          <div
            className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <p>
              Jadopte une approche centrée sur lutilisateur, avec une attention
              particulière aux détails techniques et à la maintenabilité du
              code. Chaque projet est une opportunité dallier esthétique et
              performance.
            </p>
          </div>
          <div className="bg-transparant text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"></div>
        </div>
        {/* Center Timeline */}
        <div className="relative w-4 flex justify-center mx-9">
          {/* Timeline Line */}
          <div className="absolute w-1 bg-green-700 h-full"></div>
          {/* Timeline Dots */}
          <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/6 -translate-y-1/6 top-[12%]"></div>
          <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/6 -translate-y-1/3 top-[40%]"></div>
          <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/6 -translate-y-1/2 top-[65%]"></div>
          <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/6 -translate-y-1/2 top-[90%]"></div>
        </div>

        <div className="Prt3 w-[600px]">
          <div className="bg-transparant text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 relative h-[150px]"></div>
          <div
            className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <p>
              Jadopte une approche centrée sur lutilisateur, avec une attention
              particulière aux détails techniques et à la maintenabilité du
              code. Chaque projet est une opportunité dallier esthétique et
              performance.
            </p>
          </div>
          <div className="bg-transparant text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"></div>
          <div
            className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 h-[150px]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <p>
              Jadopte une approche centrée sur lutilisateur, avec une attention
              particulière aux détails techniques et à la maintenabilité du
              code. Chaque projet est une opportunité dallier esthétique et
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;

// {
//     duration: 1000,
//     once: true,
//     mirror: true,
//     easing: 'ease-in-out',
//     offset: 100,
// }

// const Section02 = () => {
//     return (
//       <div className="bg-gray-900 py-16 flex justify-center">
//         <div className="flex max-w-5xl w-full">
//           {/* Left Column */}
//           <div className="w-1/2 flex flex-col items-end pr-8">
//             <div className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 relative">
//               <p>
//                 Salut, je suis Salah Eddine Toiati, un développeur Full Stack de 21 ans, étudiant à la Cité des Métiers. Passionné par la création web, je conçois des solutions complètes qui combinent créativité et performance.
//               </p>
//             </div>
//             <div className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 relative">
//               <p>
//                 J'adore transformer des problèmes complexes en solutions simples et efficaces, et je m'efforce toujours de livrer des projets qui répondent ou dépassent les attentes.
//               </p>
//             </div>
//           </div>

//           {/* Center Timeline */}
//           <div className="relative w-4 flex justify-center">
//             {/* Timeline Line */}
//             <div className="absolute w-1 bg-green-700 h-full"></div>
//             {/* Timeline Dots */}
//             <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-[10%]"></div>
//             <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-[40%]"></div>
//             <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-[70%]"></div>
//             <div className="absolute bg-green-600 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-[90%]"></div>
//           </div>

//           {/* Right Column */}
//           <div className="w-1/2 flex flex-col items-start pl-8">
//             <div className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 relative">
//               <p>
//                 Mon expertise englobe le front-end et le back-end, avec des technologies telles que HTML5, CSS3, JavaScript (React, Vue), PHP, et Node.js. Je m'efforce de créer des expériences utilisateur modernes et efficaces.
//               </p>
//             </div>
//             <div className="bg-white text-black p-6 rounded shadow-lg w-80 lg:w-auto mt-8 relative">
//               <p>
//                 J'adopte une approche centrée sur l'utilisateur, avec une attention particulière aux détails techniques et à la maintenabilité du code. Chaque projet est une opportunité d'allier esthétique et performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default Section02;
