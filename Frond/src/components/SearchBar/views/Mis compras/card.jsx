import ReviwerM from "../../components/modalReviwers/ReviwerM"
import ReviwerE from "../../components/modalReviwers/ReviwerE"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productosSinPag } from "../../redux/actions";
const ProductCard = ({ product }) => {
  const { user } = useAuth0();
  const usuarios = useSelector((state)=> state.Allclients);
  const currentUser = usuarios.find((usuario) => {
    return usuario.name.toLowerCase() === user.name.toLowerCase() && usuario.correo_electronico.toLowerCase() === user.email.toLowerCase();
  });
  console.log(currentUser);

console.log(product)
  return (
    <div key={product.productoId} className="flex justify-center ml-5 flex-col items-center justify-between p-6 w-[650px] rounded-lg bg-white border-b shadow-sm mb-4">
                                       
    <div className="flex items-center justify-between w-full">
      <Link to={`/detail/${product.productoId}`}>
        <img src={product.imagenProducto} alt="fotoProducto" className="w-20 h-20 object-cover border-2 border rounded-md " />
      </Link>
        <div className="-ml-10 w-40">
            <div className="font-medium capitalize text-gray-800">{product.productoName}</div>
            <div className="w-20 -ml-2 text-right text-xs flex items-center justify-center">
            <span>Cantidad: {product.cantidad}</span>
            

            </div>
            
        </div>
       
        <div className="w-32 flex flex-col text-right font-medium">
            <div className="text-xs text-gray-500">Costo</div>
            <div className="flex flex-col">
            ${product.productoPrecio}.00
            <p className="text-gray-500 text-sm">{product.fechaCompra.split(',')[0]}</p>
            </div>
            
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
