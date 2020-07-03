import React from 'react';
import Header from './Header';
import NewKombuchaForm from './NewKombuchaForm';
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='header'>
        <Header />
      </div>
      <div className='newDrink'>
        <NewKombuchaForm />
      </div>
    </React.Fragment>
  );
}

export default App;
