import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        const arrayTodos = [];
        for (let i = 0; i < data.length; i++) {
          arrayTodos.push(data[i]);
        }
        this.setState({ todos: arrayTodos });
      });
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        const oldArray = this.state.todos;
        const newToDo = data;
        const newArray = oldArray.concat(newToDo);
        this.setState({ todos: newArray });
      });
  }

  toggleCompleted(todoId) {
    const todosArray = this.state.todos;
    for (let i = 0; i < todosArray.length; i++) {
      if (todoId === todosArray[i].todoId) {
        const todo = todosArray[i];
        const oldStatus = todo.isCompleted;
        const newStatus = !oldStatus;
        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(todo)
        })
          .then(res => res.json())
          .then(data => {
            const oldArray = this.state.todos;
            const newToDo = data;
            const newArray = [];
            for (let i = 0; i < oldArray.)
            console.log(data);
          });
      }
    }
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
