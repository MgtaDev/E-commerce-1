import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { products } from "../../redux/actions";
import { BsCheckCircle } from 'react-icons/bs';
import { BsXCircle } from 'react-icons/bs';
import axios from "axios";
import { clientes } from '../../redux/actions.js'

import Swal from 'sweetalert2'

const ClientesTable = () => {


  const dispatch = useDispatch()
  const stateClients = useSelector(state => state.Allclients);
  console.log(stateClients);
  const [disableTF, setDisableTF] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const numberSize = 10;

  const handlerPageNumber = (index) => {
    setPageNumber(index);
  };

  useEffect (
    () => {
      dispatch(clientes())
    }
  );
  
  //Admin
  const makeAdminAlert = (id) => {
    const makeUserAdmin = (id) => {
      const extractIdNumber = (id) => {
        const idParts = id.split('-'); // Separa el string en partes utilizando el carácter "-"
        return parseInt(idParts[1]); // Convierte la segunda parte a un número entero y lo retorna
      };
      const idNumber = extractIdNumber(id); 
      axios.put(`/cliente/${idNumber}`, { admin: true })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    Swal.fire({
      title: 'Estas seguro?',
      text: "Al aceptar, haras a este usuario administrador de la pagina",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, continuar!'
    }).then((result) => {
      makeUserAdmin(id)
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho!',
          'Este usuario ahora es administrador',
          'success'
        )
      }
    })
  }
  const unmakeAdminAlert = (id) => {
    const unmakeUserAdmin = (id) => {
      const extractIdNumber = (id) => {
        const idParts = id.split('-'); // Separa el string en partes utilizando el carácter "-"
        return parseInt(idParts[1]); // Convierte la segunda parte a un número entero y lo retorna
      };
      const idNumber = extractIdNumber(id); 
      axios.put(`/cliente/${idNumber}`, { admin: false })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    Swal.fire({
      title: 'Estas seguro?',
      text: "Al aceptar,le quitaras acceso de administrador a este usuario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, continuar!'
    }).then((result) => {
      unmakeUserAdmin(id)
      if (result.isConfirmed) {
        Swal.fire(
          'Hecho!',
          'Este usuario ya no es administrador',
          'success'
        )
      }
    })
  }

  //Ban
  const banAlert = (id) => {
  const banUser = (id) => {
    const extractIdNumber = (id) => {
      const idParts = id.split('-'); // Separa el string en partes utilizando el carácter "-"
      return parseInt(idParts[1]); // Convierte la segunda parte a un número entero y lo retorna
    };
    const idNumber = extractIdNumber(id); // Extrae el número del id
    axios.delete(`/cliente/${idNumber}`)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  Swal.fire({
    title: 'Estas seguro?',
    text: "Le prohibiras el acceso a la pagina a este usuario!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, banear'
  }).then((result) => {
    banUser(id)
    if (result.isConfirmed) {
      Swal.fire(
        'Baneado!',
        'Este usuario ha sido baneado de manera indefinida.',
        'success'
      )
    }
  })
  }
  const  unbanAlert = (id) => {
    const unbanUser = (id) => {
      const extractIdNumber = (id) => {
        const idParts = id.split('-'); // Separa el string en partes utilizando el carácter "-"
        return parseInt(idParts[1]); // Convierte la segunda parte a un número entero y lo retorna
      };
      const idNumber = extractIdNumber(id); // Extrae el número del id
      axios.put(`/cliente/${idNumber}`, { activa: true })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    Swal.fire({
      title: 'Estas seguro?',
      text: "Al aceptar le concederas acceso de nuevo a la pagina a este usuario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      unbanUser(id)
      if (result.isConfirmed) {
        Swal.fire(
          'Acceso renovado!',
          'Este usuario tiene acceso de nuevo a la pagina',
          'success'
        )
      }
    })
    }





  return (
    <>
      <table className="w-full rounded-lg overflow-hidden">
        <thead className="bg-gray-100 uppercase text-sm leading-normal">
          <tr className="text-gray-600">
            <th className="border-0 px-6 py-4 font-bold">Nombre</th>
            <th className="border-0 px-6 py-4 font-bold">Correo Electronico</th>
            <th className="border-0 px-6 py-4 font-bold">Direccion</th>
            <th className="border-0 px-6 py-4 font-bold">Estado</th>
            <th className="border-0 px-6 py-4 font-bold">Hacer admin</th>
            <th className="border-0 px-6 py-4 font-bold">Banear</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {stateClients.map((client) => (
            <tr key={client.id} className="border-t">
              <td className="px-6 text-center py-10">{client.name}</td>
              <td className="px-6 text-center py-10">{client.correo_electronico}</td>
              <td className="px-6 text-center py-10">{client.direccion}</td>
              <td className="px-6 l text-center py-10">
              {client.activa === true ? (
                <div className="d-flex align-items-center">
                  <span>Activo</span>
                  <BsCheckCircle className="relative bottom-4" />
                </div>
              ) : (
                <>

                  <span className="ml-3">Baneado</span>
                  <BsXCircle className="mr-5 relative bottom-4" />
              </>
              )}</td>
              <td className="px-6 text-center py-4">
              {client.admin === false 
              ? <button onClick={()=> makeAdminAlert(client.id)} className="bg-indigo-800 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded">Hacer admin</button>
              : <button onClick={()=> unmakeAdminAlert(client.id)} className="bg-purple-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded">Quitar admin</button>
              }
              </td>
              <td className="px-6 text-center py-4">
              {client.activa === true
              ? <button onClick={()=> banAlert(client.id)} className="bg-red-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded">Banear</button>
              : <button onClick={()=> unbanAlert(client.id)} className="bg-green-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded">Quitar baneo</button>
              }

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex py-30 justify-center items-center space-x-2 mt-4 mb-10">
    
      {Array.from(Array(stateClients.paginas), (_, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded hover:bg-gray-700 ${pageNumber === i ? 'bg-gray-800 text-white font-bold' : 'bg-white text-gray-600'}`}
          onClick={() => handlerPageNumber(i)}
        >
          {i + 1}
        </button>
      ))}
    
    </div>
        </>
      );
};

export default ClientesTable;