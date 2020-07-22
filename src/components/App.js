import React from 'react';
import BusinessList from './BusinessList'
import RandomBusiness from './RandomBusiness'
import '../App.css';
import PostBusiness from './PostBusiness';

function App() {
  return (
    <React.Fragment>
      <BusinessList />
      <RandomBusiness />
      <PostBusiness />
    </React.Fragment>
  );
}

export default App;