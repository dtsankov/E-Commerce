import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { useForm } from "../../hooks/useForm";

export const Search = ({ onProductSearchSubmit }) => {
    const { values, changeHandler } = useForm({ search: '' });

    const handleSearch = (event) => {
        changeHandler(event);
        onProductSearchSubmit(event.target.value);
    };

    return (
        <div className="field-container">
            <input 
                type="text" 
                className="search-bar" 
                name="search" 
                placeholder="Search..." 
                value={values.search} 
                onInput={handleSearch}
            />
             <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </div>
    )
}