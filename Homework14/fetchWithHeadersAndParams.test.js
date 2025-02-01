const axios = require('axios');
const fetchWithHeadersAndParams = require('../Homework14/fetchWithHeadersAndParam');

jest.mock('axios');

test('includes custom headers and URL params in the request', async () => {
  const mockedResponse = { data: [{ id: 1, title: 'Mocked Title' }] };
  axios.get.mockResolvedValue(mockedResponse);

  const data = await fetchWithHeadersAndParams();

  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
    headers: { 'Custom-Header': 'HeaderValue' },
    params: { userId: 1 }
  });
  expect(data).toEqual(mockedResponse.data);
});
