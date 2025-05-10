import search from './../../assets/img/search.png';
import notificacion from './../../assets/img/notificacion.png';
const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
      />
      <img src={search} alt="" />
      <img src={notificacion} alt="" />
    </div>
  );
}   

export default Search;