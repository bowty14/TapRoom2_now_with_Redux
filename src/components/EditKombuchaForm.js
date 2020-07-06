import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';


function EditKombuchaForm(props) {
  const { kombucha } = props;
  function handleEditKombuchaFormSubmission(event) {
    event.preventDefault();
    if (event.target.name.value === "") {
      event.target.name.value = kombucha.name;
    }
    if (event.target.brand.value === "") {
      event.target.brand.value = kombucha.brand;
    } 
    if (event.target.price.value === "") {
      event.target.price.value = kombucha.price
    }
    if (event.target.flavor.value === "") {
      event.target.flavor.value = kombucha.flavor
    }
    if (event.target.quantity.value === "") {
      event.target.quantity.value = kombucha.quantity
    }
    props.onEditKombucha({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, quantity: event.target.quantity.value, id: kombucha.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKombuchaFormSubmission}
        buttonText='Update Kombucha' />
    </React.Fragment>
  );
}

EditKombuchaForm.propTypes = {
  onEditKombucha: PropTypes.func
};

export default EditKombuchaForm;