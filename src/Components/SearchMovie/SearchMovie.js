import React from 'react';

import Rate from '../Rate';

import './SearchMovie.css';

const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate setRatingSearch={setRatingSearch} rating={ratingSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
