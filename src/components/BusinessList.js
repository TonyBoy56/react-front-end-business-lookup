import React from 'react';

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      businessList: []
    };
  }

  makeApiCall = () => {
    fetch(`http://localhost:3000/`)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            businessList: jsonifiedResponse
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }

  componentDidMount() {
    this.makeApiCall()
  }


  render() {
    const { error, isLoaded, businessList } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>This is a business list</h1>
          <ul>
            {businessList.map((business, index) =>
              <li key={index}>
                <h3>{business.name}</h3>
                <p>{business.business_type}</p>
                <p>{business.website}</p>
                <p>{business.phone}</p>
                <p>{business.address}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}



export default BusinessList;