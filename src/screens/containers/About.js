import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import Icon from '../../sections/components/Icon'
class About extends Component {
  static   navigationOptions=()=>  {
   return { title:'About',
   tabBarIcon:<Icon icon="🙄" /> ,
   drawerIcon:<Icon icon="🙄" /> 
  }
}
componentDidMount(){
 this.focus =  this.props.navigation.addListener('didFocus',()=>{
    console.log("didfocus")
    StatusBar.setBarStyle('light-content') //light-content
    StatusBar.setBackgroundColor('#022c43')
    //StatusBar.setHidden(false,'slide') 

  })
}


componentWillUnmount(){
  this.focus.remove();
}
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png'}}
          style={styles.logo}
        />
        <Text style={styles.text}>Platzi Video es construido como una aplicaciÃ³n educativa para enseÃ±ar React Native y React Navigation</Text>
        <Text style={styles.text}>@LeonidasEsteban</Text>
        <Text style={styles.text}>2019</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#022c43',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  }
})

export default About