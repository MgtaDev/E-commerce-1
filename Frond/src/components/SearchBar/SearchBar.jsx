import React, { useState } from 'react';
import { FormSearchBar } from './Styled_SearchBar';
import Loupe from '../../assets/img/Loupe.svg';

const SearchBar = ({ placeholder, history }) => {

	const [inputText, setInputText] = useState('');
	
	const handleChange = (ev) => {
		setInputText(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		setInputText('');
		history.push(`/search?query=${inputText.trim().toLowerCase()}`);
	};

	return (
		<FormSearchBar onSubmit={handleSubmit}>
			<input onChange={handleChange} type="text" placeholder={placeholder} value={inputText} />
			<button type="submit">
				<img src={Loupe} alt="" />
			</button>
		</FormSearchBar>
	);
};

export default SearchBar;