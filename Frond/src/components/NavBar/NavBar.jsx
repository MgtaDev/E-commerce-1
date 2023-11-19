import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginButton from "../LoginComponents/Login";
import Profile from "../LoginComponents/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getProductByName, productFilter } from "../../redux/actions";
import Swal from "sweetalert2";
import { styled } from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {

  const location = useLocation()
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const formRef = useRef();


  //Hide dropdown useEffect
  useEffect(() => {
    const handleClick = (ev) => {
      if (formRef.current && !formRef.current.contains(ev.target)) {
        setOptions([]);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const sendWhatsappMessage = () => {
    window.open("https://wa.me/584121968978", "_blank")
  };


  
  const {user, isAuthenticated, isLoading } = useAuth0()
  return (
    <>
    <div className="">
    <div class="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 h-2 animate-pulse"></div>

      <header className=' text-white bg-[#103361] flex justify-between px-4 '>
        <div>
          <p className=' cursor-pointer text-xs py-1'>
            Contactanos al 0412-1968978
          </p>
        </div>

        <div>
          <Link to={'/catalogo'} className='mr-4 text-xs'>
            Productos
          </Link>
          <Link to={'/aboutUs'} className='mr-4 text-xs'>
            Sobre nosotros
          </Link>
          <Link to={'/faqs'} className='text-xs'>
            FAQ'S
          </Link>
        </div>

      </header>
      <nav className='bg-[#151616] shadow shadow-md flex justify-between py-2 px-4 items-center'>
        {/* Logo */}
        <Link to='/'>
          <h2 className=' text-2xl font-bold text-white cursor-pointer'>Enmable</h2>
        </Link>


        <SearchBar />





        {/* Menu */}
        <div className='flex mr-0 jutify-between items-center'>
          <div className='px-3 flex justify-between gap-5 items-center'>
            <Link to='/carrito'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-200 mt-2">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Link>

            <Link to='/favoritos'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-200 mt-2">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>

            </Link>


          </div>

          <div className="items-center flex">
            <Profile />
            <LoginButton />
          </div>

        </div>



      </nav>
      {/* <div className="shadow shadow-md px-5">
      <ul className="flex gap-4 justify-center">
        <Link to='/'>
        <li className="text-gray-600 tex-xs hover:text-blue-900 cursor-pointer">Home</li>
        </Link>
        <Link to='/catalogo'>
        <li className="text-gray-600 tex-xs hover:text-blue-900 cursor-pointer">Productos</li>
        </Link>
        <Link to='contact'>
        <li className="text-gray-600 tex-xs hover:text-blue-900 cursor-pointer">Contactanos</li>
        </Link>
        <li></li>
      </ul>
    </div> */}

    </div></>
  );
};

export default Navbar;