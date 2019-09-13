import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { getCities } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  componentWillMount() {
    this.props.getCities();
  }

  render() {
    if (!this.props.cities) {
      return (
        <ul className="cities">
          The list is empty
        </ul>);
    }
    return (
      <ul className="cities">
        { this.props.cities.map(city => <City city={city} key={city.name} />) }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
