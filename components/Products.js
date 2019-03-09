import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native'

import {  Card } from 'react-native-elements'

import devices from '../devices'

import convert from 'color-convert'

const Product = ({computer, onClickView}) => (
    <TouchableHighlight underlayColor={'white'} onPress = {() => onClickView(computer)}>
        <View>
            <Card title= {computer.name}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.productImage}
                        resizeMode="cover"
                        source={{ uri: computer.picture }}
                    />
                </View>

                <View style={styles.computerAttributeRow}>
                    <Text>Model Number:</Text>
                    <Text>{ computer.model_number.length > 18 ? (computer.model_number.substring(0, 15) + '...') : computer.model_number }</Text>
                </View>

                <View style={styles.computerAttributeRow}>
                    <Text style={styles.capitalizeText}>Color:</Text>    
                    <Text style={{color: `rgb(${convert.keyword.rgb((computer.color.toLowerCase()))})`, fontWeight:'bold'}}> { computer.color.length > 18 ? (computer.color.substring(0, 15) + '...') : computer.color }</Text>
                </View>

                <View style={styles.computerAttributeRow}>
                    <Text>Processor:</Text>        
                    <Text> { computer.processor.length > 18 ? (computer.processor.substring(0, 15) + '...') : computer.processor }</Text>
                </View>
                <View style={styles.computerAttributeRow}>
                    <Text> Ram:</Text>
                    <Text> { computer.ram.length > 18 ? (computer.ram.substring(0, 15) + '...') : computer.ram }</Text>
                </View>
                <View style={styles.computerAttributeRow}>
                    <Text> Memory:</Text>
                    <Text> { computer.memory.length > 18 ? (computer.memory.substring(0, 15) + '...') : computer.memory }</Text>
                </View>
                <View style={styles.computerAttributeRow}>
                    <Text> Vga:</Text>
                    <Text> { computer.vga.length > 18 ? (computer.vga.substring(0, 15) + '...') : computer.vga }</Text>
                </View>

                <View style={styles.computerAttributeRow}>
                    <Text> Operating System:</Text>
                    <Text> { computer.operating_system.length > 18 ? (computer.operating_system.substring(0, 15) + '...') : computer.operating_system }</Text>
                </View>

                <View style={styles.computerAttributeRow}>
                    <Text> Brand:</Text>
                    <Text style={{fontWeight:'bold', color:'#2089dc'}}>{ computer.brand.length > 18 ? (computer.brand.substring(0, 15) + '...') : computer.brand }</Text>
                </View>

                <Text style={styles.computerPrice}> $ {computer.price}</Text>
            </Card>
        </View>
    </TouchableHighlight>
)


export default class Products extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            devices: devices
        }
    }

    onClickView = (computer) => {
        alert(`I' m Clicked  ${computer.name}`)
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
                    this.state.devices.computers.map((computer, i) => <Product key={i} computer={computer} onClickView={this.onClickView}/>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    productImage: {
        width: 200, 
        height: 200
    },
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    computerPrice: {
        color:'red', 
        fontWeight:'bold', 
        fontSize: 19
    },
    capitalizeText: {
        textTransform:'capitalize'
    }
})