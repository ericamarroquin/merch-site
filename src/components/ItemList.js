import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function ItemList(props) {
  return(
    <React.Fragment>
      {props.itemList.map((item) => 
        <Item name={item.name}
        description={item.description}
        quantity={item.quantity}
        key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;