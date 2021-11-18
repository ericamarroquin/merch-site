import React from "react";
import PropTypes from "prop-types";
import ItemDetails from "./ItemDetails";


function Item(props) {
  const [detailsVisibleOnPage, handleShowDetailsOnClick] = React.useState(false); // creates a 'state' property detailsVisibleOnPage and function handleShowDetailsOnClick that will update details state
  const { item } = props;

  // function handleClickForItemDetails() = {



  return(
    <React.Fragment>
      <div onClick = {() => whenItemDetailsClicked()}>
        {props.name}
        {detailsVisibleOnPage && ( // will trigger if detailsVisibleOnPage is true
          <ItemDetails itemToShowDetails={item} /> // send selected item into item details as a prop
        )}
      </div>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number
};

export default Item; 