import React from 'react';
import { connect } from 'react-redux';
import { randomApiCall } from '../actions';

class RandomBusiness extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(randomApiCall());
  }

  render(){
    const { error, isLoading, randomBusiness } = this.props;
    
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      console.log(this.props)
      return (
        <React.Fragment>
          <h1>Here's a random business</h1>
          <ul>
            <li>
              <h3>{randomBusiness.name}</h3>
              <p>{randomBusiness.business_type}</p>
              <p>Website: </p><a href={randomBusiness.website}>{randomBusiness.website}</a>
              <p>{randomBusiness.phone}</p>
              <p>{randomBusiness.address}</p>
            </li>
          </ul>
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    randomBusiness: state.randomBusiness,
    isLoading: state.isLoading,
    error: state.error,
    businessList: state.businessList,
  }
}

export default connect(mapStateToProps)(RandomBusiness);