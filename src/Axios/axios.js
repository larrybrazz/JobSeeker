import React, { useState } from "react";
import axios from "axios";

export const fetchJobs = (input) => {
  const options = {
    method: "GET",
    url: ` https://google-jobs.p.rapidapi.com/query=${input}`,
    params: { keyword: "Secretary", location: "Frankfurt", offset: "0" },
    headers: {
      "X-RapidAPI-Key": "e82f188234msha11c3062165c241p15e5f6jsn7f649a58bef4",
      "X-RapidAPI-Host": "google-jobs.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setSearchResults(response.data.offers);
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
