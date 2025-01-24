class RequestHandler {
    async fetchTodo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const todo = await response.json();
      return todo;
    }
  
    async fetchUser() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      return user;
    }
  }
  export default RequestHandler;