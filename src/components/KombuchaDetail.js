import React from 'react';
import PropTypes from 'prop-types';


function KombuchaDetail(props) {
  const { kombucha, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  return (
    <React.Fragment>
      <h1 className='drinkHeader'>Kombucha Details</h1>
      <div className='drinkDetails'>
        <h3>Drink Name: {kombucha.name}</h3>
        <h3>Brand Name: {kombucha.brand}</h3>
        <h3>Price per pint ${kombucha.price}</h3>
        <h3>Kombucha flavor: {kombucha.flavor}</h3>
        <h3>Pints left in keg: {kombucha.quantity}</h3>
        <div className='drinkButtons'>
          <button className='controlButtons' onClick={props.onClickingEdit}>Update Kombucha</button>
          <button className='controlButtons' onClick={() => onClickingDelete(kombucha.id)}>Delete Kombucha</button>
          <button className='controlButtons' onClick={() => onClickingBuy(kombucha)}>Pour a pint</button>
          <button className='controlButtons' id='tapKeg' onClick={() => onClickingRestock(kombucha)}>Restock Kombucha</button>
        </div>
      </div>
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