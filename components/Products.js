import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native'

import {  Card, Button, Icon, Input   } from 'react-native-elements'

import devices from '../devices'

import Product from './Product' 

export default class Products extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            devices: devices
        }
    }

    stringToColour = (str) => {
        var hash = 0
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash)
        }
        console.log(hash)
        var colour = '#'
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF
            colour += ('00' + value.toString(16)).substr(-2)
        }
        return colour
    }

    render() {
        return (
            <View>
                {
                    this.state.devices.computers.map((computer, i) => <Product key={i} computer={computer} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />)
                }
            </View>
        )
    }
}