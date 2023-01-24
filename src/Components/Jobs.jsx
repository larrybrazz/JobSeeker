import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import JobDescription from "./JobDescription";

const Jobs = ({ handleShowMore , showMore}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    fetchJobs();
  }, []);

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
      })
      .catch((error) => console.log(error));
  };

  const handleLoadMore = () => {
    setVisible((prev) => prev + 10);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/mode-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginTop: "70px",
          fontFamily: "cursive,san serif",
        }}
      >
        {searchResults ? (
          searchResults.slice(0, visible).map((results, index) => (
            <div
              key={index}
              className="container mx-auto row border-top mt-5 pt-2"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: " 10px",
                backgroundImage: "url(/mode-bg.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className=" col col-sm-16">
                <h3>{results.title}</h3>
                <h5>{results.tags}</h5>
                <p>{results.company_name} </p>
                <p>
                  <i className="bi bi-geo-alt " /> {results.location}
                </p>
                <Link>{results.url}</Link>
              </div>
              <div className="col col-sm-16">
                <JobDescription
                  handleShowMore={handleShowMore}
                  showMore={showMore}
                  results={results}

                />
              </div>
            </div>
          ))
        ) : (
          <p> Not Working</p>
        )}
      </div>
      {visible < searchResults.length && (
        <button className="btn btn-success" onClick={handleLoadMore}>
          Load more Jobs
        </button>
      )}
    </div>
  );
};

export default Jobs;
