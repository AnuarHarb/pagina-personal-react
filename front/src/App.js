import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoForm from './InfoForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      lastName: ''
    }
  }

  componentDidMount(){
    const url = 'http://localhost:8000/api'
    fetch(`${url}/info`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          name: response[0].nombre,
          lastName: response[0].apellido
        })
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hola chicos de Centraal Academy! :D
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.name} {this.state.lastName}
          </a>
          <InfoForm />
        </header>
      </div>
    );
  }
}

export default App;
