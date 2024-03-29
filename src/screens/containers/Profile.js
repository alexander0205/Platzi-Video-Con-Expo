import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {

  handleLogout=()=>{
    this.props.dispatch({
      type:'REMOVE_USER'
    });
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.user.username}</Text>
        <Button
          title="Cerrar sesiÃ³n"
          color="#67a52e"
          onPress={this.handleLogout}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
function mapStateToProps(state){
  console.log(state.user)
  return{
    user:state.user
  }
}

export default connect(mapStateToProps)(Profile)