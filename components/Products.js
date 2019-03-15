import React from 'react'
import { View } from 'react-native'

import Product from './Product' 
export default class Products extends React.Component {

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
                    this.props.devices.map((computer, i) => <Product key={i} computer={computer} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />)
                }
            </View>
        )
    }
}