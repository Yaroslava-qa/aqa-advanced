const axios = require('axios');

async function fetchWithHeadersAndParams() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Custom-Header': 'HeaderValue'
    },
    params: {
      userId: 1
    }
  });
  return response.data;
}

module.exports = fetchWithHeadersAndParams;
