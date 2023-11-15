import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';


export const Search = () => {


    return(

        <form action="/search" method="get" className="search-form">
            <div className="field-container">
                <input type="text" className="search-bar" name="q" placeholder="Search..." />
                <button type="submit" className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </form>
    )
}