import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import PokemonDetail from './PokemonDetail';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

async function getPokemon() {
  try {
    let response = await fetch(API_URL);
    let responseJson = await response.json();

    const indicator = 'pokemon/';
    return responseJson.results.map(pokemon => {
      pokemon.id = pokemon.url.substring(pokemon.url.indexOf(indicator) + indicator.length, pokemon.url.lastIndexOf('/'));
      pokemon.name = capitalizeFirstLetter(pokemon.name);
      return pokemon;
    });
  } catch(err) {
    console.error(err);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class PokemonList extends Component {
  constructor() {
    super();

    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
    this.state = {
      isLoading: true,
      dataSource: dataSource.cloneWithRows([])
    };
  }

  componentDidMount() {
    getPokemon()
      .then(pokemon => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(pokemon)
        });
      }).finally(() => {
        this.setState({
          isLoading: false
        });
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
    if (this.state.isLoading) {
      return (
        <Spinner isLoading={this.state.isLoading} />
      );
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
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

export default PokemonList;
