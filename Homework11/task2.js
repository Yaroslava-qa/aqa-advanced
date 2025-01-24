function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('response not ok')
        }
        return response.json()
      })
  }
  
  function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('response not ok')
        }
        return response.json()
      })
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