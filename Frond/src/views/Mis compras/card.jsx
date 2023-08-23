// import ReviwerM from "../../components/modalReviwers/ReviwerM"
// import ReviwerE from "../../components/modalReviwers/ReviwerE"
const ProductCard = ({ product }) => {
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
        {/* {product.review ? (
          <ReviwerM product={product.id} currentUser={currentUser.id} />
        ) : (
          <ReviwerE  product={product.id} initialRating={product.review} initialComentario/>
        )} */}
      </div>
    </div>
  );
};
export default ProductCard;