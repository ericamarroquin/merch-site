import React from "react";
import PropTypes from "prop-types";


function Item(props) {
  const [details, showDetails] = React.useState(false); // using hooks

  return(
    <React.Fragment>
      <div onClick={() => showDetails(!details)}>
        <p><em>{props.name}</em></p>
      </div>

      {details ? 
        <p>{props.description} - Quantity: {props.quantity}</p> : null} 

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