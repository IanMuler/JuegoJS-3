const API = 'https://hp-api.herokuapp.com/api/characters/';

const getData = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;