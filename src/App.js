import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    //Only for extends Component
    state = {
        persons: [
            { id:"1", name: "Joshua", age: 26 },
            { id:"2", name: "Axel", age: 25 },
            { id:"3", name: "Míriam", age:26 }
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

    nameChangeHandler = (event, id) => {
        const myPersonIndex = this.state.persons.findIndex(per => {
            return per.id === id
        });

        const person = {
            ...this.state.persons[myPersonIndex]
        };

        //const person = Object.assign({}, this.state.persons[myPersonIndex]);

        person.name = event.target.value;

        const newPersons = [...this.state.persons];
        newPersons[myPersonIndex] = person

        this.setState({
            persons: newPersons 
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
            backgroundColor: 'green',
            color: 'white',
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
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)} />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
        }   

        const classes = [];

        if(this.state.persons.length <=2) {
            classes.push('red'); // classes = ['red']
        }

        if(this.state.persons.length <=1) {
            classes.push('bold'); // classes = ['red', 'bold'];
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App!!11!</h1>
                <p className={classes.join(' ')}>This is really working!</p>
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
