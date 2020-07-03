import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
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
  
  

}