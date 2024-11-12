
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




function Section03() {
  useEffect(() => {
    AOS.init();
  });
    return (
      <div className="bg-gray-900 py-16 text-center text-white">
        <h2 className="text-2xl font-bold mb-8">Compétences Techniques</h2>
        <div className="flex flex-col items-center space-y-8">
          
          {/* Row 1 */}
          <div className="flex space-x-20">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="500"
            >
                <img src="html.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
                        data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="700">
            <img src="css.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
                        data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="900">
            <img src="JS.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
                        data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="1100">
            <img src="PhP.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="1300">
            <img src="Py.png" width="90px"/>
            </div>
            
          </div>
          
          {/* Divider Line */}
          <div className="w-1/2 border-t-2 border-green-600"></div>
          
          {/* Row 2 */}
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="1500">
            <img src="React.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="1700">
            <img src="Laravel.png" width="75px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="1900">
            <img src="Nodejs.png" width="90px"/>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mt-4">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="2100">
            <img src="Bootstrape.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="2200">
            <img src="Thilwind.png" width="90px"/>
            </div>
          </div>
  
          {/* Divider Line */}
          <div className="w-1/2 border-t-2 border-green-600"></div>
  
          {/* Row 3 */}
          <div className="flex space-x-4">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="2300"
             >
                <img src="sql.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="2400"
           >
                <img src="Mysql.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center"
            data-aos="flip-left"
            data-aos-easing="liniear"
            data-aos-delay="2500"
              >
                <img src="Mongodb.png" width="90px"/>
            </div>
          </div>
  
          {/* Final Divider Line */}
          <div className="w-1/2 border-t-2 border-green-600"></div>
        </div>
      </div>
  )
}

export default Section03
  