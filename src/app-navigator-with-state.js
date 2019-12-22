import React,{Component } from 'react';
import {connect } from 'react-redux';
import AppNavigator from './app-navigator'
import {

    reduxifyNavigator
}from 'react-navigation-redux-helpers';

import {BackHandler} from 'react-native';
import { NavigationActions } from'react-navigation';
const ReduxifApp = reduxifyNavigator(AppNavigator,'root')


class AppNavigatorWithState extends ReduxifApp{
    onBackPress = () => {
        this.props.dispatch(NavigationActions.back({
          key: null
        }));
    
        return true//Tengo que poner esto para que se termine de mandar el evento
      }
    
      componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
      }
      componentWillUnMount(){
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
      }
}

function mapStateToProps(state){
    return {
        state: state.navigation
    }
}
export default connect(mapStateToProps)(AppNavigatorWithState)