import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class BusinessList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

 

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(makeApiCall());
  }


  render() {
    const { error, isLoading, businessList } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      console.log(this.props)
      return (
        <React.Fragment>
          <h1>This is a business list</h1>
          <ul>
            {businessList.map((business, index) =>
              <li key={index}>
                <h3>{business.name}</h3>
                <p>{business.business_type}</p>
                <p>Website: </p><a href={business.website}>{business.website}</a>
                <p>{business.phone}</p>
                <p>{business.address}</p>
                <hr/>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    businessList: state.businessList,
    isLoading: state.isLoading,
    error: state.error,
    randomBusiness: state.randomBusiness
  }
}

export default connect(mapStateToProps)(BusinessList);