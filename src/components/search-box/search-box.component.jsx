import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({ placeholder, searchHandler }) => {
    return(
        <input type='search' placeholder={ placeholder } onChange={ searchHandler }/>
    )
}