const axios = require('axios');
const fetchData = require('../Homework14/fetchData');

jest.mock('axios');

describe('Mocking Axios Requests', () => {
  test('mocks successful HTTP request', async () => {
    const mockedResponse = { data: { id: 1, title: 'Mocked Title' } };
    axios.get.mockResolvedValue(mockedResponse);

    const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');

    expect(data).toEqual(mockedResponse.data);
  });

  test('mocks failed HTTP request', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    try {
      await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    } catch (error) {
      expect(error.message).toBe('Network Error');
    }
  });
});
