import React from "react";
import PropTypes from "prop-types";

export default function ExampleComponent({ propertyA, propertyB }) {
  return (
    <>
      <h2>I'm a exampleComponent</h2>
      <h3>I'm propertyA</h3>
      <h4>{propertyA}</h4>
      <h3>I'm propertyB</h3>
      <h4>{propertyB}</h4>
      <h4>I'm a change for a pull request aimed at the My-branch branch (talk about meta)!</h4>
      <h4>Will i run? Stay tuned</h4>
    </>
  );
}

ExampleComponent.defaultProps = {
  propertyA: 33,
  propertyB: "Zoink",
};
ExampleComponent.propTypes = {
  propertyA: PropTypes.number,
  propertyB: PropTypes.string,
};
