import React from 'react';
import BusinessList from './BusinessList'
import RandomBusiness from './RandomBusiness'
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <BusinessList />
      <RandomBusiness />
    </React.Fragment>
  );
}

export default App;