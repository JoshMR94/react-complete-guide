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

    switchNameHandler = (newName) => {
        // console.log("Was clicked!");
        // DONT DO THIS:this.state.persons[0].name = "Maximiliano";
        this.setState({
            persons: [
                { name: newName, age: 26 },
                { name: "Axel", age: 25 },
                { name: "Míriam", age:300 }
            ]
        });
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 26 },
                { name: "Axel", age: 25 },
                { name: "Míriam", age: 26 }
            ]
        });
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer' 
        };
      
        return (
            <div className="App">
                <h1>Hi, I'm a React App!!11!</h1>
                <p>This is really working!</p>
                <button
                    style={style} 
                    onClick={this.switchNameHandler.bind(this, 'Joshuamiliano')}>Switch name</button>
                <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, '!!!!!!')}
                    changed={this.nameChangeHandler}>My hobbies: Playing videogames</Person>
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}/>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Working'))
    }
}

export default App;
