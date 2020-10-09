import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");
  //   console.log("Render every time");
  useEffect =
    (() => {
      //   console.log("I render once!");
      axios("");
    },
    [term]);
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
    </div>
  );
};
export default Search;
