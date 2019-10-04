import React, { Component,Fragment } from 'react';
import {
  Text,
  StatusBar

} from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';

import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list.js';
import Movie from '../../screens/containers/movie';
import Search from '../../sections/containers/search';

class Home extends Component {

  static  navigationOptions = ()=>{
    return{
      header:Header,
    }
  }

  compoeneg

  async componentDidMount() {
    this.focus =   this.props.navigation.addListener('didFocus',()=>{
      console.log("didfocus")
      StatusBar.setBarStyle('dark-content') //light-content
      StatusBar.setBackgroundColor('#00BCD4',true)
      //StatusBar.setHidden(false,'slide') 
  
    })
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    
    return (
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}


export default connect(null)(Home);
