import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    //Only for extends Component
    state = {
        persons: [
            { name: "Joshua", age: 26 },
            { name: "Axel", age: 25 },
            { name: "Míriam", age:26 }
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        // console.log("Was clicked!");
        // DONT DO THIS:this.state.persons[0].name = "Maximiliano";
        this.setState({
            persons: [
                { name: "Joshuamiliano", age: 26 },
                { name: "Axel", age: 25 },
                { name: "Míriam", age:300 }
            ]
        });
    }

    render() {
      
        return (
            <div className="App">
                <h1>Hi, I'm a React App!!11!</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Playing videogames</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Working'))
    }
}

export default App;
