
import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import FourthComponent from './components/learning-examples/FourthComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="learningComponent">
        My Hello World

        <FirstComponent />
        <SecondComponent />

        <ThirdComponent />
        <FourthComponent />


      </div>
    );
  }
}


export default App;
