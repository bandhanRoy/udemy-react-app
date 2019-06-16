import React from "react";
// import Radium from "radium";
import personStyles from "./Person.module.css";

const Person = props => {
  //   const style = {
  //     "@media (min-width: 500px)": {
  //       width: "450px"
  //     }
  //   };
  return (
    <div className={personStyles.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} old
      </p>
      <p>{props.children}</p>
      <input type="text" defaultValue={props.name} onChange={props.changed} />
    </div>
  );
};

// export default Radium(Person);
export default Person;
