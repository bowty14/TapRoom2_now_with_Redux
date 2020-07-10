import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './kombuchaList';
import KombuchaDetail from './KombuchaDetail';
import EditKombuchaForm from './EditKombuchaForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TapRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKombucha: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKombuchaToList = (newKombucha) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, flavor, quantity } = newKombucha;
    const action = {
      type: 'ADD_KOMBUCHA',
      id: id,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false})
  }
  
  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.props.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    this.setState({ selectedKombucha: selectedKombucha });
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KOMBUCHA',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedKombucha: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKombuchaInList = (kombuchaToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, flavor, quantity } = kombuchaToEdit;
    const action = {
      type: 'ADD_KOMBUCHA',
      id: id,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKombucha: null
    });
  }

  handleBuyingAPint = (id) => {
    const purchasedPint = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    if (purchasedPint.quantity === 0) {
      return purchasedPint.quantity;
    } else {
      purchasedPint.quantity -= 1;
    }
    const editedMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== this.state.selectedKombucha.id).concat(purchasedPint);
    this.setState({
      masterKombuchaList: editedMasterKombuchaList
    });
  }

  handleTappingAKeg = (id) => {
    const restockKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    restockKombucha.quantity = 124;
    const editedMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== this.state.selectedKombucha.id).concat(restockKombucha);
    this.setState({
      masterKombuchaList: editedMasterKombuchaList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKombuchaForm
        kombucha={this.state.selectedKombucha}
        onEditKombucha={this.handleEditingKombuchaInList} />
      buttonText = 'Return to tap list';
    } else if (this.state.selectedKombucha !== null) {
      currentlyVisibleState = <KombuchaDetail
        kombucha={this.state.selectedKombucha}
        onClickingDelete={this.handleDeletingKombucha}
        onClickingEdit={this.handleEditClick}
        onClickingBuy={this.handleBuyingAPint}
        onClickingRestock={this.handleTappingAKeg} />
      buttonText = 'Return to taproom';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm
        onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />
      buttonText = 'Return to taproom';
    } else {
      currentlyVisibleState = <KombuchaList
        kombuchaList={this.props.masterKombuchaList}
        onKombuchaSelection={this.handleChangingSelectedKombucha} />
      buttonText = 'Add to tap'
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
};

TapRoom.propTypes = {
  masterKombuchaList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKombuchaList: state
  }
}

TapRoom = connect(mapStateToProps)(TapRoom);

export default TapRoom;