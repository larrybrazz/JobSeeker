import React, { useState } from 'react'

const JobDescription = ({ results }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = (results) => {
    setShowMore((prev) => !prev);
  };

  return (
    <div>
      <div className="col col-sm-16">
        <h3> Description </h3>
        <h5> {results.company_name}</h5>
        <p>
          {showMore ? results.description : results.description.substr(0, 200)}
        </p>
        <button
          onClick={() => handleShowMore(results.created_at)}
          className="btn btn-success"
        >
          {showMore ? "Show less" : " Show More"}
        </button>
      </div>
    </div>
  );
};

export default JobDescription
