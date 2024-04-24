import React from "react";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import Show from "./components/Show";

const App = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${text}&entity=song`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data.results));
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Search handleChange={handleChange} />
      <Show data={data} />
    </div>
  );
};

export default App;
