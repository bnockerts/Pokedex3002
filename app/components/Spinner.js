import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';

class Spinner extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  }

  render() {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator 
          animating={this.props.isLoading}
          size='large'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
