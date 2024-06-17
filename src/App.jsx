/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import Exercise from "./Exercise";

function App() {
  const [exercise, setExercise] = useState([]);

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
      setExercise(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='container bg-blue-200 min-w-full'>
      <Header />
      <Exercise data={exercise}></Exercise>
      <footer className="bg-gray-300 p-4 text-xl font-bold text-blue-500 pl-16">
        <h2>
          Created By <a href='https://github.com/anurag090697' className="hover:text-green-600">Anurag</a>
        </h2>
      </footer>
    </div>
  );
}

export default App;
