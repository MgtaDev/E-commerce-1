import { useState } from 'react';
import ProductCard from './card'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { clientes, userCompras  } from '../../redux/actions';

const MisCompras = () => {

  const dispatch = useDispatch()
  const extractIdNumber = (id) => {
    const idParts = id && id.split('-') ; // Separa el string en partes utilizando el carácter "-"
    return parseInt(idParts && idParts[1]); // Convierte la segunda parte a un número entero y lo retorna
  };
  // 
  const usuarios = useSelector((state)=> state.Allclients);
  const { user } = useAuth0();
  const currentUser = usuarios.find((usuario) => {
    return usuario.name.toLowerCase() === user?.name.toLowerCase() && usuario.correo_electronico.toLowerCase() === user.email.toLowerCase();
  });
  //      
  const idNumber = extractIdNumber(currentUser?.id); //
  console.log(currentUser?.id);
  console.log(idNumber);
  //  
  useEffect(() => {
    dispatch(userCompras(idNumber));
  }, [dispatch, idNumber]);
  const userComprasById = useSelector((state) => state.userCompras)
  console.log(userComprasById.productos);
  // 
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPage, setSelectedPage] = useState(1)
  const [itemsPerPage] = useState(6)
  const lastOrder = currentPage * itemsPerPage;
  const firtsOrder = lastOrder - itemsPerPage
  const currentOrdersToShow = userComprasById.productos?.slice(firtsOrder,lastOrder)
  console.log(currentOrdersToShow);
  const [disableTF, setDisableTF] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const numberSize = 10;
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(userComprasById.productos?.length / itemsPerPage); i++) {
    pageNumbers.push({number:i, selected: i === selectedPage});
  }
  return pageNumbers;
};
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 );
    setSelectedPage(selectedPage - 1);
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1 );
    setSelectedPage(selectedPage + 1);
  };
  
  
const pageNumbers = generatePageNumbers();
  useEffect(() => {
    dispatch(clientes());
  }, [dispatch, clientes]); // Agrega como dependencia la acción "clientes()", para que useEffect se ejecute cada vez que se complete la acción


     

  return (
    <>
      <h2 className="text-3xl px-40 text-gray-700  my-8 pb-4">
        Mis compras
      </h2>
      {userComprasById?.productos?.length > 0 && (
             <p className='ml-40 text-gray-500 text-lg'>Hola {currentUser.name.split(' ')[0]}, Estas son tus compras recientes:</p> 
      )}

      {userComprasById?.productos?.length > 0 ? (
        <>
        <div className="flex flex-row  ">
          <div className="grid grid-cols-1 gap-8 bg-gray-50  w-4/5 mx-auto ">
            {currentOrdersToShow?.map((product) => (
              <div key={product.id} className="flex justify-center rounded-md">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div><div className="flex justify-center py-8">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  setSelectedPage(selectedPage - 1);
                }
              } }
             className="border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
            >
              {"<"}
            </button>
            {pageNumbers.map(({ number }) => (
              <button
                key={number}
                onClick={() => {
                  setCurrentPage(number);
                  setSelectedPage(number);
                } }
                className={`border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950 ${
                  number === pageNumber ? "bg-blue-900 text-white" : ""
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => {
                if (currentPage < Math.ceil(userComprasById.productos?.length / itemsPerPage)) {
                  setCurrentPage(currentPage + 1);
                  setSelectedPage(selectedPage + 1);
                }
              } }
              className="border-solid rounded border border-[255 255 255] px-3 py-1 mx-1 text-lg font-semibold text-slate-400 focus:text-slate-950 focus:border-slate-950"
            >
              {">"}
            </button>
          </div></>
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