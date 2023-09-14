import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../../assets/img/images.jpeg";
import user2 from "../../assets/img/images3.jpeg";
import user3 from "../../assets/img/images 6.jpeg";
import user4 from "../../assets/img/images 2.jpeg";
import user5 from "../../assets/img/images 1.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviews = [
    {
      date: "29/07/2023",
      rating: 5,
      text: "Estoy muy contenta con la calidad de mi producto! Recomiendo!",
      user: user1,
      name: "Angela"
    },
    {
      date: "27/07/2023",
      rating: 5,
      text: "El tiempo de entrega fue el acordado!",
      user: user2,
      name: "John"
    },
    {
      date: "19/07/2023",
      rating: 5,
      text: "Todo excelente! Recomiendo.",
      user: user3,
      name: "Maria"
    },
    {
      date: "19/07/2023",
      rating: 5,
      text: "Excelente atención y productos",
      user: user4,
      name: "Julia"
    },
    {
      date: "19/07/2023",
      rating: 5,
      text: "Todo perfecto!! Voy a volver a comprar.",
      user: user5,
      name: "Mark"
    }
  ];

  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true, // Propiedad rtl para dirección opuesta
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="px-5 py-10 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Calificaciones de nuestros clientes</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="p-5 mb-5 rounded-lg border border-gray bg-white" style={{ maxWidth: "350px" }}>
                <div className="flex items-center mb-3">
                  <img src={review.user} alt="" className="w-12 h-12 object-cover rounded-full mr-3" />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-medium">{review.name}</h3>
                    <span className="text-sm text-gray-darker">{review.date}</span>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key={index}>
                        <input type="radio" name="review" value={ratingValue} className="hidden" />
                        <FaStar
                          size="1.25em"
                          className="cursor-pointer hover:text-yellow-400"
                          color={ratingValue <= review.rating ? "#ffc107" : "#e4e5e9"}
                        />
                      </label>
                    );
                  })}
                </div>
                <p className="text-lg text-gray-darker">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;