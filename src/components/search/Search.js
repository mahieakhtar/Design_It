import React from "react";
import SearchList from "./SearchList";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm ? (
    <SearchList name="" />
  ) : (
    <SearchList name={searchTerm} />
  );

  return (
    <div>
      <input
        className="product_search"
        type="text"
        placeholder="Search Product by name ... "
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="product_row">{results}</div>
    </div>
  );
}

export default Search;
