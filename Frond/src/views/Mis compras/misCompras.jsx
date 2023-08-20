import { useState } from 'react';
import ProductCard from './card'

const MisCompras = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Labial numero 1",
      price: "$10.00",
      imgSrc: "https://i.ibb.co/KmPvyR6/img2025.jpg",
    },
    {
      id: 2,
      name: "Labial numero 2",
      price: "$30.00",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Labial numero 3 de 4ta generacion",
      price: "$245.00",
      imgSrc: "https://via.placeholder.com/150",
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quam porro reprehenderit ullam esse vero neque fugiat earum soluta. Magnam blanditiis consequatur ipsum eos sint, necessitatibus eaque. Quaerat, fugit saepe?'
    },
  ]);

  return (
    <>
      <h2 className="text-4xl text-center font-bold text-gray-00  my-8 pb-4">
        Mis compras
      </h2>
      {products.length > 0 ? (
        <div className="flex flex-row justify-start">
          <div className="grid grid-cols-1 gap-8 w-4/5 mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-md shadow-md">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center p-20 my-8">
          <p className="text-gray-600 text-xl font-medium">
            No ha realizado compras aún
          </p>
        </div>
      )}
    </>
  );
};

export default MisCompras;