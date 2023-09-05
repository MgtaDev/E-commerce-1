import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import loupe from '../../assets/img/Loupe.svg';
import styled from 'styled-components';
import { getProductByName } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';

const FormSearchBar = styled.form`
	background: var(--clr-white);
	border: 2px solid var(--clr-primary); 
	border-radius: 10px;
	min-width: 500px;
	max-width: 800px;
	display: flex;
	justify-content: space-between;
	padding: 0 .7em;
	border: 1px solid #eecafa;
	box-shadow: inset 0 0 7px rgba(0,0,0,.15);


    button {
		width: 20px;
		background: transparent;    
		border: none;
		margin-left: .5em;

		transition: transform .2s cubic-bezier(.25,.1,.75,2);
		
		transform-origin: center;
		text-align: right;
		&:hover, &:focus {
			filter: brightness(75%);
			transform: rotateZ(15deg);
		}

		img {
			height: 20px;
    	}
    }

    input {
		background: transparent;
		border: 1px #0D0202;
		font-family: 'Roboto', sans-serif;
		font-weight:bold;
		font-size: 12px;
		color: #a53fc7;
		padding: .7em 1em;
		width: 100%;
	}
	
    button:focus, input:focus{
       outline: 2px solid var(--clr-primary);
    }
`;
const ErrorMessage = styled.p`
  color: red;
  margin-left: 15px;
  font-size: 15px;
  color: #a53fc7;
`;

const SearchBar = ({ placeholder }) => {
	const dispatch = useDispatch();
	const [inputText, setInputText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
	
	
	const handleChange = (ev) => {
		setInputText(ev.target.value);
    setErrorMessage('');
	};

	const handleSubmit = async(ev) => {
    navigate('/catalogo');
		ev.preventDefault();	
		const ProductFound = await dispatch (getProductByName(inputText));
		if (ProductFound.payload.length>0){
			setInputText('');
		}else{
			setErrorMessage('Producto no encontrado');
      setInputText('');
		}
	};


	return (
    <>
		<FormSearchBar onSubmit={handleSubmit}>
			<input 
        onChange={handleChange}
        type="text" placeholder={placeholder} 
        value={inputText} 
      />
			<button type="submit">
				<img src={loupe} alt="seeker"/>
			</button>
		</FormSearchBar>
    {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}
    </>
	);
};

export default SearchBar;