import _ from 'lodash';

import React, { Component, PropTypes } from 'react';
import { View, Alert } from 'react-native';
import Greeting from './Greeting';

export default class GreetingsList extends Component {

  static handleFunction(param) {
    Alert.alert(`Received: ${JSON.stringify(param)}`);
  }

  render() {
    const greetings = _.map(this.props.names, name => (
      <Greeting
        key={name}
        name={name}
        handleFunction={GreetingsList.handleFunction}
      />));
    const style = { alignItems: 'center' };

    return (
      <View style={style}>
        {greetings}
      </View>
    );
  }
}

GreetingsList.defaultProps = {
  names: [],
};

GreetingsList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
