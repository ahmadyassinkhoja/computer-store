import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { Constants } from 'expo'

import { Button, ThemeProvider, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'

import Products from './components/Products'

class App extends React.Component {

    render() {
        return (
            <View style={{marginBottom: 20}}>
                <ScrollView>
                    <Header
                        // leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Computer Store', style: { color: '#fff' } }}
                        // rightComponent={{ icon: 'home', color: '#fff' }}
                    />

                    <Products/>
                </ScrollView>
            </View>
        )
    }
}


const AppNavigator = createStackNavigator({
    Home: {
        screen: App,
    },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})
  
export default createAppContainer(AppNavigator)