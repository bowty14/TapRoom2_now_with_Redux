import React from 'react';
import PropTypes from 'prop-types';


function KombuchaDetail(props) {
  const { kombucha, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  return (
    <React.Fragment>
      <h1>Kombucha Details</h1>
      <h3>Drink Name: {kombucha.name}</h3>
      <h3>Brand Name: {kombucha.brand}</h3>
      <h3>Price per pint ${kombucha.price}</h3>
      <h3>Kombucha flavor: {kombucha.flavor}</h3>
      <h3>Pints left in keg: {kombucha.quantity} Please only restock when keg has become empty</h3>
      <button onClick={props.onClickingEdit}>Update Kombucha</button>
      <button onClick={() => onClickingDelete(kombucha.id)}>Delete Kombucha</button>
      <button onClick={() => onClickingBuy(kombucha.id)}>Pour a pint</button>
      <button id='tapKeg' onClick={() => onClickingRestock(kombucha.id)}>Restock Kombucha</button>
      <hr />
    </React.Fragment>
  );
}


KombuchaDetail.propTypes = {
  kombucha: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default KombuchaDetail;