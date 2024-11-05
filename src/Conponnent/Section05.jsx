import "./Section05.css"
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LazyLoad from 'react-lazyload';
function Section05() {

    var settings = {

      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
          
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const softSkills = [
        {
            name: "Communication",
            description: "Clear verbal and written skills to convey ideas and coordinate with team members.",
            img: "Communicatio.jpg"
        },
        {
            name: "Problem-Solving",
            description: "Strong analytical skills to break down problems and design effective solutions.",
            img: "Problem_solvign.jpg"
        },
        {
            name: "Teamwork",
            description: "Collaborative spirit to work effectively within a team and achieve shared goals.",
            img: "teamwork.jpg"
        },
        // {
        //     name: "Adaptability",
        //     description: "Ability to adjust quickly to changing environments and situations.",
        //     img: "https://example.com/adaptability.png"
        // },
        {
            name: "Time Management",
            description: "Effectively organizing and prioritizing tasks to maximize productivity and meet deadlines.",
            img: "Time_management.jpg"
        },
        {
            name: "Creativity",
            description: "Innovative thinking for unique solutions and approaches to development.",
            img: "Creativity.jpg"
        },
        {
            name: "Attention to Detail",
            description: "Ensuring accuracy and thoroughness in all tasks to deliver high-quality results.",
            img: "Take_attention.jpg"
        }
    ];
    
    // return (
    //     <div className="card-container ">
    //         {softSkills.map((skill, id) => {
    //             return (
    //                 <div className="card" key={id}>
    //                     <img src={skill.img} alt={skill.name} className="card-image" />
    //                     <div className="card-content">
    //                         <h3 className="card-title">{skill.name}</h3>
    //                         <p className="card-description">{skill.description}</p>
    //                     </div>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // );

    return (
        <div className="p-4  bg-gray-900 ">
        <Slider {...settings}>
            {softSkills.map((skill, id) => {
                return (
                    <div
                    //  style={{
                    //      width: "300px",
                    //      height: "200px",
                    //      margin: "10px"
                    //  }}
                    style={{ margin: "0 10px" }}
                     className="card bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-102 " key={id}>
                        <LazyLoad height={160} offset={200} once>
                            <img src={skill.img} alt={skill.name} className="w-full h-40 object-cover" />
                        </LazyLoad>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                            <p className="text-gray-600 text-sm">{skill.description}</p>
                        </div>
                    </div>
                )
            })}
            </Slider>
        </div>
    );
}


export default Section05