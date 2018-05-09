import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import User from './components/User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      id: null,
      avatar_url: null,
      url: null,
      location: null,
      public_repos: null
    }
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        return response;
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let user = await this.getUser(e.target.elements.userName.value); 
    this.setState({ 
      username: user.login,
      id: user.id,
      avatar_url: user.avatar_url,
      url: user.html_url,
      location: user.location,
      public_repos: user.public_repos
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Form handleSubmit={this.handleSubmit} />
        <User 
          username={this.state.username}
          id={this.state.id}
          avatar_url={this.state.avatar_url}
          url={this.state.url}
          location={this.state.location}
          public_repos={this.state.public_repos}
        />
      </div>
    );
  }
}

export default App;
