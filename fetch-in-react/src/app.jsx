import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        const arrayUsers = [];
        for (let i = 0; i < 5; i++) {
          arrayUsers.push(data[i]);
        }
        this.setState({ users: arrayUsers });
        this.setState({ isLoading: false });
      })
      .catch(console.error);
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
