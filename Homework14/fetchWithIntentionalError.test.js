const fetchWithIntentionalError = require('../Homework14/fetchWithIntentionalError');

test('handles error correctly and returns proper error message', async () => {
  try {
    await fetchWithIntentionalError();
  } catch (error) {
    expect(error.message).toBe('Invalid URL');
  }
});
