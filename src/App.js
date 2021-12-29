import Quote from "./Components/Quote.js";
import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json());
  }

  const generate = async () => {
    setQuote(await fetchQuote());
  }

  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);
  

  return (
    <div className="App">
      <h1 class="shimmer">Rendamei</h1>
        <h2>Anime Quote Random Generator</h2>
          <Quote quote={quote}/>
          <button onClick={generate}>Generate new quote</button>
    </div>
  );
}

export default App;
