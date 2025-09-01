import "./style.css"
import searchBar from "/search-icon.png"

export default function SearchBar() {

    return(
        <div className="filter-bar">
            <input type="text" placeholder="Buscar projetos"/>
            <i className="icon"><img src={searchBar} alt="" /></i>
        </div>
    )
}