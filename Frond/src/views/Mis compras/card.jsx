const ProductCard = ({ product, handleAddReview }) => {
  return (
    <div className="p-4 my-4 bg-white rounded-md shadow-md">
      <div className="flex flex-row items-center">
        <img src={product.imgSrc} alt={product.name} className="h-24 w-24 object-cover border-2 border-indigo-200 rounded-md mr-4" />
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-lg font-medium">{product.name}</h1>
          <p className="text-sm font-medium text-right">Fecha de compra: {product.fecha_de_compra}</p>
        </div>
      </div>
      <p className="mt-1 text-sm text-gray-600 font-medium">{product.description}</p>
      <hr className="my-4 border-gray-300 w-11/12 mx-auto" />
      <div className="flex justify-between">
        <p className="text-md font-medium">{product.price}</p>
        {product.review ? (
          <button className="bg-gray-400 hover:bg-gray-500 text-gray-900 font-semibold py-2 px-4 rounded-md">
            Editar reseña
          </button>
        ) : (
          <button 
            onClick={() => handleAddReview(product.id)} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Agregar reseña
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductCard;