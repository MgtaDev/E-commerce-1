import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../../assets/img/1.png";
import user2 from "../../assets/img/2.png";
import user3 from "../../assets/img/3.png";
import user4 from "../../assets/img/4.png";
import user5 from "../../assets/img/5.png";
import user6 from "../../assets/img/5.png";

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
    },
    {
      date: "19/07/2023",
      rating: 5,
      text: "Recomendado al 100%!",
      user: user6,
      name: "Olivia"
    }
  ];

  return (
    <div className="px-5 py-10 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Calificaciones de nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="p-5 flex flex-col rounded-lg border border-gray bg-white">
              <div className="flex items-center mb-3">
                <img src={review.user} alt="" className="w-8 h-8 object-cover mx-auto rounded-full mr-3" />
                <div>
                  <h3 className="text-xl font-medium">{review.name}</h3>
                  <span className="text-gray-darker text-sm">{review.date}</span>
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
              <p className="text-gray-darker text-lg mb-5">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;