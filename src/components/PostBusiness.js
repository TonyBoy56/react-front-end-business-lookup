import React, { useEffect } from 'react';
import { connect } from 'react-redux';

class PostBusiness extends React.Component {


}


function PostBusiness(props){

  function handlePostBusinessFormSubmission(event){
    event.preventDefault();
    useEffect(() => {
      const requestOptions = {
        method: 'POST',
      };
      fetch('http://localhost:3000/businesses', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id))
    },[]);
  }

  return(
    // form goes here
  )

}