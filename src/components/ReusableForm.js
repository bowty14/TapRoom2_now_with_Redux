import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className='reform'>
        <input 
          id="name"
          type='text'
          name='name'
          placeholder='Please a name for the kombucha' />
        <input 
          id="brand"
          type='text'
          name='brand'
          placeholder='Enter kombucha brand name' />
        <input 
          id='price'
          type='text'
          name='price'
          placeholder='Enter price per pint' />
        <input 
          id='flavor'
          type='text'
          name='flavor'
          placeholder='What flavor is this?' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}