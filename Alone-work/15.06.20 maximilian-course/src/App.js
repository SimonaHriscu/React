import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
state = {
  persons:[
  {name : 'Max', age :28},
  {name : 'Manu', age :48},
  {name : 'Stef', age :22}
]
};
switchNameHandler = () =>{
console.log('was clicked')
this.setState({persons:})
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> My Hobbies: 'racing'</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default App;
