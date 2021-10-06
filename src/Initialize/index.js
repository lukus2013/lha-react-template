import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <div className="App">
      <h1>{joke.setup}</h1>
      <h5>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h5>
      {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
        <button onClick={getAJoke} className="btn btn-success" type="button">
          {btnText}
        </button>
      ) : (
        <button
          onClick={() => setButton('Get Another Joke')}
          className="btn btn-success"
          type="button"
        >
          {btnText}
        </button>
      )}
    </div>
  );
}

export default Initialize;
