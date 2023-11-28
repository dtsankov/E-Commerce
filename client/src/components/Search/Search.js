import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { useForm } from "../../hooks/useForm";




    export const Search = ({
        onProductSearchSubmit
    }) => {

    
    const { values, changeHandler, onSubmit } = useForm({
       search: ''
    }, {}, onProductSearchSubmit);

    


    return(

        <form action="/search" method="get" className="search-form" onSubmit={onSubmit}>
            <div className="field-container">
                <input type="text" className="search-bar" name="search" placeholder="Search..." value={values.search} onChange={changeHandler}/>
                <button type="submit" className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </form>
    )
}