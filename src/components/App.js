import React from 'react';
import Header from './Header';
import TapRoom from './tapRoom'
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='header'>
        <Header />
      </div>
      <div className='newDrink'>
        <TapRoom />
      </div>
    </React.Fragment>
  );
}

export default App;
