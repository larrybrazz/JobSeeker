import React from "react";
import { useState } from "react";

const SearchDisplay = ({ searchResults }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = (index) => {
         setShowMore((prev) => !prev);
  };

  return (
    <div>
      {searchResults ? (
        searchResults.map((results, index) => (
          <div
            key={index}
            className=" container mx-auto row border-top mt-4 pt-2"
            style={{
              display: "flex",
              justifyContent: "center",
              padding:" 10px",
              backgroundImage: "url(/mode-bg.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className=" col-6 col-sm-16">
              <h3>{results.title}</h3>
              <h5>{results.tags}</h5>
              <p>{results.company_name} </p>
              <p>
                <i className="bi bi-geo-alt " /> {results.location}
              </p>
              <p>{results.remote}</p>
            </div>
            <div className="col-6 col-sm-16">
              <h3> Description </h3>
              <h5> {results.company_name}</h5>
              <p>
                {showMore
                  ? results.description
                  : results.description.substr(0, 200)}
              </p>
              <button onClick={()=>handleShowMore(index)} className="btn btn-success">
                {showMore ? "Show less" : " Show More"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p> Not Working</p>
      )}
    </div>
  );
};

export default SearchDisplay;
