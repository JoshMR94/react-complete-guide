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
        otherState: 'some other value',
        showPersons: false
    }

    /*
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
    */

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 26 },
                { name: "Axel", age: 25 },
                { name: "Míriam", age: 26 }
            ]
        });
    }

    deletePersonHandler = (personIndex) => {
        //You must do a copy of the array instead of getting a pointer with a simple =. It's equivalente to [...this.state.persons]
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer' 
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age} />
                    })}
                </div>
            );
        }   

        return (
            <div className="App">
                <h1>Hi, I'm a React App!!11!</h1>
                <p>This is really working!</p>
                <button
                    style={style} 
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Working'))
    }
}

export default App;
