const axios = require('axios');

async function fetchWithIntentionalError() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
    return response.data;
  } catch (error) {
    throw new Error('Invalid URL');
  }
}

module.exports = fetchWithIntentionalError;
