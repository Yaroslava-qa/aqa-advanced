const axios = require('axios');

describe('API Tests', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('GET /todos/1', async () => {
    const response = await axios.get(`${baseUrl}/todos/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('userId');
  });

  test('GET /users/1', async () => {
    const response = await axios.get(`${baseUrl}/users/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
  });

  test('POST /posts', async () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const response = await axios.post(`${baseUrl}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);

  });

  test('GET /posts/1', async () => {
    const response = await axios.get(`${baseUrl}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('title');
  });

  test('POST /posts - with missing fields', async () => {
    const newPost = {
      title: 'foo'
    };
    try {
      await axios.post(`${baseUrl}/posts`, newPost);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});