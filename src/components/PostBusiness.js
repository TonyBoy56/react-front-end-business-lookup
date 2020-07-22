import React from 'react';
// import { connect } from 'react-redux';



class PostBusiness extends React.Component {

   handlePostBusinessFormSubmission(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        name: event.target.name.value,
        business_type: event.target.business_type.value,
        website: event.target.website.value,
        phone:  event.target.phone.value,
        address: event.target.address.value
      })
      // body: 'name='`${event.target.name.value}` +
      // params: 'name=hotlips&business_type=pizza&website=www.hotlipspizza.com&phone=444.444.4444&address=234 ne oerjo'
        // body: `${'name:hotlips, business_type:pizza, website:www.hotlipspizza.com, phone: 444.444.4444, address:234 ne oerjo'}`
    }
    console.log('requestOption:',requestOptions);
    fetch('http://localhost:3000/businesses/', requestOptions)
      .then(response => console.log(response))
  }

  // http://localhost:3000/businesses/?name=hotlips&business_type=pizza&website=www.hotlipspizza.com&phone=444.444.4444&address=234 ne oerjo

  render () {
    return (
    <React.Fragment>
      <hr />
      <h3>Add a business form</h3>
      <form onSubmit={this.handlePostBusinessFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Business Name'/>
        <br />
        <input 
          type='text'
          name='business_type'
          placeholder='Business Type'/>
        <br />
        <input 
          type='text'
          name='website'
          placeholder='Website Address'/>
        <br />
        <input 
          type='text'
          name='phone'
          placeholder='Phone Number'/>
        <br />
        <input 
          type='text'
          name='address'
          placeholder='Address'/>
        <br />
        <button type='submit'>Add Business to Database</button>
      </form>
    </React.Fragment>
    )};
};

export default PostBusiness;