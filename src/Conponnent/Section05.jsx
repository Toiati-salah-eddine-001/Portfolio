// 







// how to minimize crushing in img elements in the s

import "./Section05.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LazyLoad from 'react-lazyload';

function Section05() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const softSkills = [
    {
      name: "Communication",
      description: "Clear verbal and written skills to convey ideas and coordinate with team members.",
        img: "Communicatio.jpg",
    },
    {
      name: "Problem-Solving",
      description: "Strong analytical skills to break down problems and design effective solutions.",
        img: "Problem_solvign.jpg",
    },
    {
      name: "Teamwork",
      description: "Collaborative spirit to work effectively within a team and achieve shared goals.",
      img: "teamwork.jpg",
    },
    {
      name: "Time Management",
      description:"Effectively organizing and prioritizing tasks to maximize productivity and meet deadlines.",
      img: "Time_management.jpg",
    },
    {
      name: "Creativity",
      description:"Innovative thinking for unique solutions and approaches to development.",
      img: "Creativity.jpg",
    },
    {
      name: "Attention to Detail",
      description:"Ensuring accuracy and thoroughness in all tasks to deliver high-quality results.",
      img: "Take_attention.jpg",
    },
  ];

  return (
    <div className=" bg-gray-900  py-20">
      <Slider {...settings}>
        {softSkills.map((skill, id) => {
          return (
            <div
              // style={{
              //   margin: "0 10px",
              // }}
              className="card bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-102"
              key={id}
            >
              {/* <LazyLoad height={160} offset={200} once> */}
                {/* <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-40 object-cover"
                  style={{ objectFit: "cover" }}
                /> */}
              {/* </LazyLoad> */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Section05;