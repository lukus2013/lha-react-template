import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

// // eslint-disable-next-line import/no-mutable-exports
// let jokeData = {};
// const setJokeData = (object) => {
//   jokeData = object;
// };

export default getJoke;
