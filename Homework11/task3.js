async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const todo = await response.json();
    return todo;
  }

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const user = await response.json();
    return user;
  }

  Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log('Результати Promise.all:')
    console.log('Todo:', todo)
    console.log('User:', user)
  })
  .catch(error => {
    console.error('Помилка під час запиту:', error)
  })
  .finally(() => {
    console.log('Promise.all: Робота завершена')
  })
Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('Результат Promise.race:', result)
  })
  .catch(error => {
    console.error('Помилка під час запиту:', error)
  })
  .finally(() => {
    console.log('Promise.race: Робота завершена')
  })