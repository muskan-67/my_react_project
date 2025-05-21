import {IoSearch} from "react-icons/io5";

const Search = () => {
  return (
    <div className="search d-flex align-items-center">
      <IoSearch className="search-icon ml-2" />
      <input type="text" placeholder="Search here...." />
      
    </div>
  );
}

export default Search;