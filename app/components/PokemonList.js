import React, { Component, PropTypes } from 'react';
import {
  ListView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class PokemonList extends Component {
  static propTypes = {
    onRowPress: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    pokemon: PropTypes.array.isRequired
  }

  renderRow = (rowData, sectionId, rowId) => {
    return (
      <TouchableHighlight underlayColor='#ddd' onPress={() => this.props.onRowPress(rowData)}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.container}>
              <Text style={styles.id}>{rowData.id}</Text>
              <Text style={styles.name} numberOfLines={1}>{rowData.name}</Text>
              <Switch
                value={rowData.caught}
                onValueChange={(value) => this.props.onValueChange(rowData.id)}
              />
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }).cloneWithRows(this.props.pokemon);

    return (
      <ListView
        dataSource={dataSource}
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

export default PokemonList;
