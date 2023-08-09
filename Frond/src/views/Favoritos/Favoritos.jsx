import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import Card from "../../components/CatalogoComponen/Card";
import Offers from "../../components/offers/offers"
import { productsCopy } from "../../redux/actions";

const Favoritos = () => {
const stateProducts = useSelector(state => state.copyAllProducts);
const { user, isAuthenticated} = useAuth0();
const dispatch = useDispatch()
const saludo = ()=> {
    return (
        <div className="text-xl">
        {isAuthenticated?<h1 className="mx-16 my-4">Hola, <span className="font-bold">{user.given_name}</span>. Estos son tus productos Favoritos: </h1>: <h1>Estos son tus productos Favoritos</h1>}
        </div>
    )
}
useEffect(()=>{
    dispatch(productsCopy())
}, [dispatch])

console.log(useAuth0())
  return (
    <div>
        {saludo()}
    <div className="mx-24 my-8">
        <div className="flex flex-row flex-wrap justify-center">
          { stateProducts.productos?.map(({id, name, descripcion, precio_venta}) => {
            return (
                <div className="w-80 justify-around p-3">
                  <Card
                    id={id}
                    key={id}
                    name={name}
                    descripcion={descripcion}
                    precio={precio_venta}
                  />
              </div>
            );
          })}
        </div>
    </div>
        <Offers/>
    </div>
  );
};

export default Favoritos;
