import React from "react";

function ItemDetails(props) {
  return(
    <React.Fragment>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  );
}

export default ItemDetails;