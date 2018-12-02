import React, { Component } from 'react';
import './App.css';
import { container as TasksContainer } from "./tasks";

class App extends Component {
  render() {
    return (
        <TasksContainer/>
    );
  }
}

export default App;
