import React from 'react';
import PropTypes from 'prop-types';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className='reForm'>
      
        <input 
          id="name"
          type='text'
          name='name'
          placeholder='Please a name for the kombucha' className='field'/>
        <input 
          id="brand"
          type='text'
          name='brand'
          placeholder='Enter kombucha brand name' size='20x20' className='field'/>
        <input 
          id='price'
          type='text'
          name='price'
          placeholder='Enter price per pint' className='field'/>
        <input 
          id='flavor'
          type='text'
          name='flavor'
          placeholder='What flavor is this?' className='field' />
        <input
          id='quantity'
          type='number'
          min ='0'
          name='quantity'
          placeholder='Kegs have 124 pints' />
        <br/>
        <button type='submit' id='reuButton'>{props.buttonText}</button>
      
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;