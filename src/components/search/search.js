import './search.css';

function Search () {
    return (
        <div className="search-form container d-flex">
            <input className="search-form__txt" type="text" placeholder="Что вы ищите на сайте?" />
            <a className="d-flex" href="#!">Найти</a>               
        </div>
    )
}

export default Search;