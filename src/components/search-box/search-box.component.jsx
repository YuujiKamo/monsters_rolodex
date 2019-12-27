import React from 'react';

import './search-box.styles.css';

//Functional Component
//No access to state or lifecycle methods
//because it doesn't have super()
//which allows access to React.Component.constructor()
//e is an anonymous function passed into it through handleChange
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={ placeholder } 
        onChange={ handleChange }
    />
)