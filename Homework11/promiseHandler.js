import RequestHandler from './requestHandler.js';
class PromiseHandler {
  constructor() {
    this.requestHandler = new RequestHandler();
  }
  async handleAllRequests() {
    try {
      const [todo, user] = await Promise.all([this.requestHandler.fetchTodo(), this.requestHandler.fetchUser()]);
      console.log('Результати Promise.all:');
      console.log('Todo:', todo);
      console.log('User:', user);
    } catch (error) {
      console.error('Помилка під час запиту:', error);
    } finally {
      console.log('Promise.all: Робота завершена');
    }
  }
  async handleRaceRequests() {
    try {
      const result = await Promise.race([this.requestHandler.fetchTodo(), this.requestHandler.fetchUser()]);
      console.log('Результат Promise.race:', result);
    } catch (error) {
      console.error('Помилка під час запиту:', error);
    } finally {
      console.log('Promise.race: Робота завершена');
    }
  }
}

export default PromiseHandler;