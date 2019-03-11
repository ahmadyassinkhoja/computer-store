import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'

import { Constants } from 'expo'

import { Button, ThemeProvider, Header, Badge, withBadge, Icon  } from 'react-native-elements'

import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions
} from 'react-navigation'

import Products from './components/Products'

import IconBadge from 'react-native-icon-badge'


const CartIcon = () => (
    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
        <IconBadge
            MainElement={
                <View style={{ width:50, height:50, marginTop: 23}}>
                    <Icon name='shopping-cart' color='#fff' style={{ width:70, height:70 }}/>
                </View>
            }
            BadgeElement={
                <Text style={{color:'#FFFFFF'}}> 1 </Text>
            }
            IconBadgeStyle={
                {   
                    width:20,
                    height:20,
                    backgroundColor: 'red',
                    marginTop: 15
                }
            }
        />
    </View>
)


class App extends React.Component {
    render() {
        return (
            <ScrollView>
                <Header
                    centerComponent={{
                        text: 'Computer Store',
                        style: { color: '#fff' }
                    }}
                    rightComponent={<CartIcon/> }
                />

                <Products />
            </ScrollView>
        )
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: App
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator)
