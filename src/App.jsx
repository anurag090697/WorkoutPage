/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  async function getData() {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      headers: {
        "x-rapidapi-key": "a09def0f2emshdcc7e36f69fdb60p1b1885jsnd064a990f9c8",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='container bg-blue-200 min-w-full'>
      <h1>hiii</h1>
    </div>
  );
}

export default App;
