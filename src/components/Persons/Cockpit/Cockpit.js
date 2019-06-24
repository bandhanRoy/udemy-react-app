import React from "react";
import Styles from "./Cockpit.module.css";

class cockpit extends React.Component {
  render() {
    const { props } = this;

    let classes = [];
    let btnClass = "";

    if (props.showPersons) {
      btnClass = Styles.Red;
    }

    if (props.persons.length <= 2) {
      classes.push(Styles.red); // classes = ["red"]
    }
    if (props.persons <= 1) {
      classes.push(Styles.bold); //classes =  ["red", "bold"]
    }

    return (
      <div className={Styles.Cockpit}>
        <h1>Hi I'm React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
        </button>
      </div>
    );
  }
}

export default cockpit;
