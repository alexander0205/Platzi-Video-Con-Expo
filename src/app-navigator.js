import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator
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
import DrawerComponent from './sections/components/drawer'
const Main = createStackNavigator(
    {
        Home:Home,
        Category
    },{
        navigationOptions:{
            header:Header,

        },   cardStyle:{
            backgroundColor:'with'
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


const  WithModal =  createStackNavigator({
    Main:TabNavigator,
    Movie:Movie,
},{
    mode:'modal',
    headerMode:'none',
    cardStyle:{
        backgroundColor:'with'
    },navigationOptions:{
        gesturesEnabled:true
    }
}

)


const DrawerNavigator = createDrawerNavigator({
    Main:{
        screen:WithModal,
        navigationOptions:{
            title:'Inicio',
            drawerIcon:<Icon>🏠</Icon>
        }

    },

    Sobre:{
        screen:About
    },
    Suerte:{
        screen:Lucky
    }
},{
    drawerWidth:200,
    drawerBackgroundColor:'#f6f6f6',
    contentComponent:DrawerComponent,
    contentOptions:{
        activeBackgroundColor:'#7aba2f',
        activeTintColor:'white',
        inactiveTintColor:'#828282',
        inactiveBackgroundColor:'white',

        itemStyle:{
            borderBottomWidth: .2,
            borderBottomColor: 'rgba(0,0,0,.5)',
        },labelStyle:{
            marginHorizontal:0
        },
        iconContainerStyle:{
            marginHorizontal: 5,
        }
    }
})


const SwithNavigator  =  createSwitchNavigator({
    App:DrawerNavigator,
    Loading:Loading,
    Login:Login,
},{
    initialRouteName:'Loading'
}

)
export default SwithNavigator;