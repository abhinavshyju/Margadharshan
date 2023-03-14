import React, { useState } from 'react';

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOption, setSearchOption] = useState('name');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchQuery, searchOption);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='Search-con'>
      <input className='Search-input'
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit" className='Search-button'> 
      <img src='https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png'alt='search'/>
      </button>
      </div>
    </form>
  );
}

export default SearchBar;
