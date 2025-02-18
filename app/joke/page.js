"use client"; // Enables client-side rendering
import { useState } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState("Click the button for a joke!");

  const fetchJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    setJoke(`${data.setup} ... ${data.punchline}`);
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl mb-4">{joke}</h1>
      <button
        onClick={fetchJoke}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        New Joke
      </button>
    </div>
  );
}
