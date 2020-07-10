import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './kombuchaList';
import KombuchaDetail from './KombuchaDetail';
import EditKombuchaForm from './EditKombuchaForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class TapRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKombuchaToList = (newKombucha) => {
    const { dispatch } = this.props;
    const action = a.addKombucha(newKombucha);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }
  
  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.props.masterKombuchaList[id];
    this.setState({ selectedKombucha: selectedKombucha });
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKombucha(id)
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
    const action = a.addKombucha(kombuchaToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKombucha: null
    });
  }

  handleBuyingAPint = (id) => {
    const purchasedPint = this.state.masterKombuchaList[id];
    if (purchasedPint.quantity === 0) {
      return purchasedPint.quantity;
    } else {
      purchasedPint.quantity -= 1;
    }
    const editedMasterKombuchaList = this.state.masterKombuchaList[id]
    this.setState({
      masterKombuchaList: editedMasterKombuchaList
    });
  }

  handleTappingAKeg = (id) => {
    const restockKombucha = this.state.masterKombuchaList[id];
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
    } else if (this.props.formVisibleOnPage) {
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
    masterKombuchaList: state.masterKombuchaList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TapRoom = connect(mapStateToProps)(TapRoom);

export default TapRoom;