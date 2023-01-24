import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchDisplay from "./SearchDisplay";
const SearchInput = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const fetchJobs = (input) => {
    axios
      .get(
        `https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api/?query=${input}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key":
              "e82f188234msha11c3062165c241p15e5f6jsn7f649a58bef4",
            "X-RapidAPI-Host": "arbeitnow-free-job-board.p.rapidapi.com",
          },
        }
      )
      .then((response) => {
        setSearchResults(response.data.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    };
    
  const handleJobTitle = (event) => {
    setUserInput(event.target.value);
  };

  const handleLocation = (event) => {
    setUserLocation(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobs(userInput);
    // console.log(fetchJobs);
  };

  return (
    <div>
      <div className="search">
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            className="searchInput form-control"
            placeholder=" Job Title"
            value={userInput}
            onChange={handleJobTitle}
          />

          <input
            type="text"
            className="searchInput form-control"
            placeholder="country or Region"
            value={userLocation}
            onChange={handleLocation}
          />
          <label htmlFor=""> Full Time</label>
          <input
            type="checkbox"
            className="searchInput "
            name="full_time"
            value={userInput}
            // onChange={handleInputChange}
          />
          <button className="btn btn-success form-control"> Search</button>
        </form>
      </div>
      <SearchDisplay searchResults={searchResults} />
    </div>
  );
};

export default SearchInput;
