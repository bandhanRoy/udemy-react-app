import React from "react";
import Styles from "./App.module.css";
import Persons from "./../components/Persons/Persons";
import Cockpit from "./../components/Persons/Cockpit/Cockpit";

class App extends React.Component {
  state = {
    persons: [
      { key: "person1", name: "Max", age: "28" },
      { key: "person2", name: "Manu", age: "29" },
      { key: "person3", name: "Stephanie", age: "36" },
      { key: "person4", name: "Macmohan", age: "45" }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was Clicked');
    // !DO NOT USE THIS this.persons[0].name = Bandhan
    this.setState({
      persons: [
        { name: newName, age: "29" },
        { name: "Sam", age: "32" },
        { name: "Raj", age: "29" },
        { name: "Bandhan", age: "49" }
      ]
    });
  };

  nameChangedHandler = (event, key) => {
    // get the key of the person passed from changed
    const personIndex = this.state.persons.findIndex(p => {
      return p.key === key;
    });

    // get the person using the personIndex received above
    const person = {
      ...this.state.persons[personIndex] // using the object spread operator
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value; // setting the name to the target value

    const persons = [...this.state.persons]; // spread operator to copy
    persons[personIndex] = person; //updating the value of the person in persons array

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: this.state.showPersons ? false : true
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons]; // JS ES6 Spread Operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={Styles.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
