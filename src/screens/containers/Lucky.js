import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Icon
} from 'react-native';
import Search from '../../sections/containers/search';

class Lucky extends Component {
  static navigationOptions=()=>{
    return{
      title:'Voy a tener suerte',
      tabBarIcon:<Text>🐱‍👤</Text>,
      drawerIcon:<Text>🐱‍</Text>

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ðŸ€</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lucky