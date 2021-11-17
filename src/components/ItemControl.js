import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: []
    };
  };

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({mainItemList: newMainItemList,
                  formVisibleOnPage: false});
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/> // passes function to child as a prop
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} />
      buttonText = "Add Item";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

export default ItemControl;