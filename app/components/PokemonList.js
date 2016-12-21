import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

async function getPokemon() {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
    let responseJson = await response.json();
    // let result = [ { url: 'https://pokeapi.co/api/v2/pokemon/1/',
	  //   name: 'bulbasaur' },
	  // { url: 'https://pokeapi.co/api/v2/pokemon/2/', name: 'ivysaur' },
	  // { url: 'https://pokeapi.co/api/v2/pokemon/3/',
	  //   name: 'venusaur' },
	  // { url: 'https://pokeapi.co/api/v2/pokemon/4/',
	  //   name: 'charmander' }, ];

    const indicator = 'pokemon/';
    return responseJson.results.map(pokemon => {
      pokemon.id = pokemon.url.substring(pokemon.url.indexOf(indicator) + indicator.length, pokemon.url.lastIndexOf('/'));
      pokemon.name = capitalizeFirstLetter(pokemon.name);
      return pokemon;
    });
    // return result;
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
      dataSource: dataSource.cloneWithRows([])
    }
  }

  componentDidMount() {
    getPokemon().then(pokemon => {
      const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
      this.setState({
        dataSource: dataSource.cloneWithRows(pokemon)
      });
    });
  }

  renderRow = (rowData, sectionId, rowId) => {
    return (
      <TouchableHighlight underlayColor='#bada55' onPress={this._onPressButton}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.id}>{rowData.id}</Text>
              <Text style={styles.name} numberOfLines={1}>{rowData.name}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
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
  }
});

export default PokemonList;