import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loupe from '../../assets/img/Loupe.svg';
import styled from 'styled-components';
import { getProductByName } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import LandingPage from '../../views/LandingPage/LandingPage';
import { FaSearch } from 'react-icons/fa';

//Styled components
const FormSearchBar = styled.form`
  background-color: white;
  border: 2px solid var(--clr-primary);
  border-radius: 4px;
  min-width: 930px;
  max-width: 800px;
  display: flex;
  padding: 0 0.7em;
  border: 1px solid #ccc; /* Add a border for small screens */
  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    min-width: auto; /* Remove the min-width for small screens */
    max-width: none; /* Remove the max-width for small screens */
    padding: 0.7em; /* Add some padding for small screens */
    flex-wrap: wrap; /* Allow the form to wrap for small screens */
    input {
      width: auto; /* Remove the width for small screens */
      margin-bottom: 10px; /* Add some margin for small screens */
    }
    button {
      width: auto; /* Remove the width for small screens */
      margin-left: none; /* Remove the margin for small screens */
      margin-top: auto; /* Move the button to the bottom for small screens */
      img {
        height: auto; /* Remove the height for small screens */
      }
    }
  }
  
  button {
    width: auto; /* Remove the width for medium screens */
    margin-left: none; /* Remove the margin for medium screens */
    margin-top: auto; /* Move the button to the bottom for medium screens */
    img {
      height: auto; /* Remove the height for medium screens */
    }
    
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.75, 2); /* Add a transition for medium screens */
    
    transform-origin: center; /* Change the transform origin for medium screens */
    
    &:hover, &:focus { /* Add a hover and focus effect for medium screens */
      filter: brightness(75%); /* Add a filter effect for medium screens */
      transform: rotateZ(15deg); /* Add a transform effect for medium screens */
    }
    
    &[data-size="small"] { /* Add a size prop to change styles for small devices */
      width: auto; /* Remove the width for small devices */
      margin-left: none; /* Remove the margin for small devices */
      margin-top: auto; /* Move the button to the bottom for small devices */
      img { /* Remove the height and add a smaller height for small devices */
        height: 16px; /* Change the height to fit your design */
      }
      
      @media (max-width: 480px) { /* Add a media query to change styles for extra small devices */
        img { /* Change the height again to fit your design */
          height: 14px; /* Change the height again to fit your design */

          `

const ErrorMessage = styled.p`
  color: red;
  margin-left: 15px;
  font-size: 15px;
`;

const CustomDatalist = styled.ul`
  background-color: #fff;
  border-radius: 0.25rem;
  color: black;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  list-style: none;
  margin: 0;
  max-height: 400px;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  top: 5em;
  width: 66.8%;
  z-index: 10;

  li {
    cursor: pointer;
    padding: 1rem;
    text-transform: capitalize;
    color: #252525;
    &:hover {
      background-color: #151616;
      color:white;
    }
  }
`;

const SearchBar = ({ placeholder }) => {
  const location = useLocation()
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const formRef = useRef();
  console.log(inputText);

  //Dropdown Handle
  const handleChange = async (ev) => {
    setInputText(ev.target.value);
    setErrorMessage('');
    try {
      const response = await axios.get(`/producto?name=${inputText}`);
      console.log(response);
      setOptions(response.data);
    } catch (error) {
      console.error(error);
      setOptions([]);
    }
  };
  //Search handle
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    navigate('/catalogo');
    const ProductFound = await dispatch(getProductByName(inputText));
    if (ProductFound.payload.length > 0) {
      setInputText('');
    } else {
      Swal.fire("Oops", "Este producto no existe o no esta en venta en estos momentos", "error");
      setInputText('');
    }
  };

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



  return (
    <>
      <FormSearchBar onSubmit={handleSubmit} ref={formRef}>
        <input
          onChange={handleChange}
          type="text"
          placeholder='Busca productos, marcas y mas'
          value={inputText}
          list="suggestions"
        />
        {options?.length > 0 && inputText !== '' && (
          <CustomDatalist id="suggestions">
            {options?.map((option) => (
              <li
                className="capitalize text-black-600"
                key={option.id}
                value={option.name}
                onClick={ async () => {
                  await setInputText(option.name);
                  await navigate('/catalogo')
                  dispatch(getProductByName(option.name));
                  
                  setOptions([]);
                }}
              >
                {option.name}
              </li>
            ))}
          </CustomDatalist>
        )}
        {inputText.length > 0 && (
        <button onClick={()=>{
          setInputText('')
        }} className='mb-1'>x</button>
        )}
        <button type="submit">
          <FaSearch className='text-gray-500'/>
        </button>
      </FormSearchBar>
      {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}
    </>
  );
};

export default SearchBar;