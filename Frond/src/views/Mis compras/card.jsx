import ReviwerM from "../../components/modalReviwers/ReviwerM"
import ReviwerE from "../../components/modalReviwers/ReviwerE"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { user } = useAuth0();
  const usuarios = useSelector((state)=> state.Allclients);
  const currentUser = usuarios.find((usuario) => {
    return usuario.name.toLowerCase() === user.name.toLowerCase() && usuario.correo_electronico.toLowerCase() === user.email.toLowerCase();
  });
  console.log(currentUser);

console.log(product)
  return (
    <div key={product.id} className="flex justify-center ml-5 flex-col items-center justify-between p-6 w-[650px] rounded-lg bg-white border-b shadow-sm mb-4">
                                       
    <div className="flex items-center justify-between w-full">
      <Link to={`/detail/${product.id}`}>
        <img src={product.imagenProducto} alt="fotoProducto" className="w-20 h-20 object-cover border-2 border rounded-md " />
      </Link>
        <div className="-ml-4 w-40">
            <div className="font-medium capitalize text-gray-800">{product.productoName}</div>
            <div className="w-20 text-right text-xs flex items-center justify-center">
          
            

        </div>
            
        </div>
       
        <div className="w-32 text-right font-medium">
            <div className="text-xs text-gray-500">Costo</div>
            ${product.productoPrecio}.00
            <p className="text-xs text-red-600">Eliminar</p>
        </div>

        {product.reseñas.length > 0 ? (
    <ReviwerE productId={product.productoId} currentUserId={currentUser?.id.split('-')[1]} />
    ) : (
      <ReviwerM productId={product.productoId} currentUserId={currentUser?.id.split('-')[1]} />
  )}
        
    </div>
</div>
  );
};
export default ProductCard;
