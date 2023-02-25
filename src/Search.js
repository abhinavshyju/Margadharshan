import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Components/Searchbar';

function Search() {


  const [Place, setPlace] = useState([]);

  const fetchDatas = () => {
    return fetch("https://script.google.com/macros/s/AKfycbwVlBkemc23x3_nwPykmPgeM-YYjMKPa9oDdHJhfgKeyneEnX2cqncshGOeCUnXMq4p/exec")
      .then((response) => response.json())
      .then((placedata) => setPlace(placedata));
  
  }
  
  useEffect(() => {
  fetchDatas();

  
  }, []);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query, option) => {
    const filteredResults = Place.filter((item) => {
      return item[option].toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    setSearchResults(Place);
  }, []);
  
console.log(Place)
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className='Search-out'>
      {searchResults.map((item) => (
        <div key={item.id}>
         <Link to={`/explore/${item.disslug}/${item.slug}`}><p>{item.name}</p></Link> 
        </div>
      ))}
      </div>
    </div>
  );
}

export default Search;
