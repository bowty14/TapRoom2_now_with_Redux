import React from 'react';
import Kombucha from './kombucha';
import PropTypes from 'prop-types';

function KombuchaList(props) {
  return (
    <React.Fragment>
      {Object.values(props.kombuchaList).map((kombucha) =>
        <Kombucha
        whenKombuchaClicked = {props.onKombuchaSelection}
        name={kombucha.name}
        brand={kombucha.brand}
        price={kombucha.price}
        flavor={kombucha.flavor}
        quantity={kombucha.quantity}
        id={kombucha.id}
        key ={kombucha.id}/>
        )}
    </React.Fragment>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onKombuchaSelection: PropTypes.func
};

export default KombuchaList;