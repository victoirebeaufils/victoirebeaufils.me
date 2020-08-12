import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SearchBar = () =>{
    return (
        <div className="input-group mb-3 search-bar">
                    <input type="text" className="form-control" placeholder="Search Project" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon="search" /></button>
                    </div>
                  </div>
    )}
    export default SearchBar;