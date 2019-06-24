import React from "react";
import PropTypes from "prop-types"; // for validating properties
import personStyles from "./Person.module.css";

class Person extends React.Component {
  // call references in componentDidMount
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    const { props } = this;

    return (
      <div className={personStyles.Person}>
        <p onClick={props.click}>
          I'm {props.name} and I'm {props.age} old
        </p>
        <p>{props.children}</p>
        {/* references are available in only state ful components */}
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
          type="text"
          defaultValue={props.name}
          onChange={props.changed}
        />
      </div>
    );
  }
}
/**
 * validating or setting the prop types
 */
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string,
  changed: PropTypes.func
};

export default Person;
