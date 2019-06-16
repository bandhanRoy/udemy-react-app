import React from "react";
import Person from "./Person/Person";
import ErrorBoundary from "./../ErrorBoundary/ErrorBoundary";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={person.key}>
        <Person
          name={person.name}
          age={person.age}
          key={person.key}
          click={props.clicked.bind(props, index)}
          changed={event => props.changed(event, person.key)}
        />
      </ErrorBoundary>
    );
  });

export default persons;
