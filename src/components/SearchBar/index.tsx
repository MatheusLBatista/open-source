import "./style.css"

export default function SearchBar() {

    return(
        <div className="filter-bar">
            <input type="text" placeholder="Buscar projetos"/>
            <i className="icon"><img src="./search-" alt="" /></i>
        </div>
    )
}