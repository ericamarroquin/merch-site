import React from "react";
import PropTypes from "prop-types";


function Item(props) {
  const [details, showDetails] = React.useState(false); // using hooks
  let buttonText = null;

  if (details === true) {
    buttonText = "Hide Details";
  } else {
    buttonText = "Show Details";
  }

  return(
    <React.Fragment>
      <p><em>{props.name}</em></p>

      {details ? <h1>these are details</h1> : null}

      <button onClick={ () => showDetails(!details) }>{buttonText}</button>
      <hr />
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number
};

export default Item; 