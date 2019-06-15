import React from "react";
import "./App.css";
// import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

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
    const style = {
      padding: "5px 10px",
      border: "1px solid blue",
      backgroundColor: "green",
      fontSize: "18px",
      cursor: "pointer",
      color: "white",
      margin: "5px"
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.key}
                click={this.deletePersonHandler.bind(this, index)}
                changed={event => this.nameChangedHandler(event, person.key)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          /> */}
          {/* another way of binding data to the funtion FAST!! */}
          {/* <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Sadhana")}
          /> */}
          {/* <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          >
            My Hobbie is playing football
          </Person> */}
          {/* <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
            changed={this.nameChangedHandler}
          /> */}
        </div>
      );

      style.backgroundColor = "blue";
      // style[":hover"] = {
      //   backgroundColor: "red",
      //   color: "black"
      // };
    }

    // let classes = ["red", "bold"].join(" "); // "red bold"
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ["red"]
    }
    if (this.state.persons <= 1) {
      classes.push("bold"); //classes =  ["red", "bold"]
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        {/* one way to bind the value to the handler function
            Note: SLOW!
        */}
        {/* <button style={style} onClick={() => this.switchNameHandler("Bandhan")}>
          Switch Name
        </button> */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
