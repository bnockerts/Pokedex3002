import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PokemonDetail from '../routes/PokemonDetail';
import { toggleCaught } from '../actions';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class PokemonList extends Component {
  static propTypes = {
    pokemon: PropTypes.array.isRequired
  }

  componentWillReceiveProps(nextProps) {
    console.log('**************************************');
    console.log(nextProps.pokemon);
    console.log('**************************************');
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.pokemon)
    });
  } 

  renderRow = (rowData, sectionId, rowId) => {
    return (
      <TouchableHighlight underlayColor='#bada55' onPress={() => this.rowPressed(rowData)}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.container}>
              <Text style={styles.id}>{rowData.id}</Text>
              <Text style={styles.name} numberOfLines={1}>{rowData.name}</Text>
              <Switch
                value={rowData.caught}
                onValueChange={() => this.props.dispatch(toggleCaught(rowData.id))}
              />
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  rowPressed = (pokemon) => {
    this.props.navigator.push({
      id: 'detail',
      pokemon
    });
  }

  render() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.pokemon)
    };

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd'
  },
  id: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  name: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function mapStateToProps(state) {
  const { pokemonList } = state;
  const { isLoading, pokemon } = pokemonList;

  return {
    isLoading,
    pokemon
  }
}

export default connect(mapStateToProps)(PokemonList);
