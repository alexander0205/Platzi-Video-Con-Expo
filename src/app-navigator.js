import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import React from 'react'
import Home from './screens/containers/home'
import About from './screens/containers/About'
import Lucky from './screens/containers/Lucky'
import Login from './screens/containers/login'
import Loading from './screens/containers/loading'

import Profile from './screens/containers/Profile'
import Movie from './screens/containers/movie'
import Category from './screens/containers/category'
import Header from './sections/components/header'
import Icon from './sections/components/Icon'
const Main = createStackNavigator(
    {
        Home:Home,
        Movie:Movie,
        Category
    },{
        navigationOptions:{
            header:Header,

        }
    }
)

const TabNavigator  = createBottomTabNavigator(
    {
        Home:{
            screen:Main,
            navigationOptions:{
                title:'Inicio',
                tabBarIcon:<Icon icon="🏠" /> ,
            }
        },
        About:{
            screen: About,
          
        },
        Lucky:{
            screen:Lucky,
            navigationOptions:{
                title:'Suerte',
                tabBarIcon:<Icon icon="😁" /> ,
            }
        },
        Profile:{
            screen:Profile,
            navigationOptions:{
                title:'Perfil',
                tabBarIcon:<Icon icon="🐱" /> ,
            }
        }
    },{
        tabBarOptions:{
            activeTintColor:'white',
            activeBackgroundColor:'#65a721'
        }
    }
)
const SwithNavigator  =  createSwitchNavigator({
    App:TabNavigator,
    Loading:Loading,
    Login:Login,
},{
    initialRouteName:'Loading'
}

)
export default SwithNavigator;