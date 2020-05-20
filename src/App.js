import React, {Component} from 'react';

import Header from './components/Header'
import Functional from './components/Functional'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: ['Dishes', 'Learning to Code', 'Destroy the Death Star', 'Go to Disneyland', 'Find the cure to Cancer']
    }

    const addTask = () => {
      const {tasks} = this.state
      this.setState({
        tasks: [...tasks]
      })
    }
  }
  render(){
    const tasks = this.state.tasks.map((task, index) => {
      return <div key={`task-index-${index}`}>
        <span>{task}</span>
      </div>
    })
  return (
    <div className="App">
      <Header />
      {tasks}
    </div>
  );
  }
}

export default App;
