import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './kombuchaList';
import KombuchaDetail from './KombuchaDetail';
import EditKombuchaForm from './EditKombuchaForm';

class TapRoom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: [],
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
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(newKombucha);
    this.state({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false
    });
  }
  
  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    this.state({ selectedKombucha: selectedKombucha });
  }

  handleDeletingKombucha = (id) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== id);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKombuchaInList = (kombuchaToEdit) => {
    const editedMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== this.state.selectedKombucha.id).concat(kombuchaToEdit);
    this.setState({
      masterKombuchaList: editedMasterKombuchaList,
      editing: false,
      selectedKombucha: null
    });
  }

  handleBuyingAPint = (id) => {
    const purchasedPint = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    purchasedPint.quantity -= 1;
    const editedMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== this.state.selectedKombucha.id).concat(purchasedPint);
    this.setState({
      masterKombuchaList: editedMasterKombuchaList
    });
  }

  handleTappingAKeg = (id) => {
    const restockKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    purchasedPint.quantity -= 1;
    const editedMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== this.state.selectedKombucha.id).concat(restockKombucha);
    this.setState({
      masterKombuchaList: editedMasterKombuchaList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.)
  }

}

export default TapRoom;