import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native'

import {  Card, Button, Icon, Input   } from 'react-native-elements'

import devices from '../devices'

import convert from 'color-convert'

class Product extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            noQuantity: false
        }
    }

    addToCart = (computer) => {
        computer.quantity++
        this.setState({noQuantity: true})

        this.props.addToCart(computer)
        // this.productsService.addToCart(product, parseInt(quantity, 10))
    }
    removeFromCart = (computer) => {
        // console.log(computer)
    }

    render(){
        return(
            <View>
                <Card title= {this.props.computer.name}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.productImage}
                            resizeMode="cover"
                            source={{ uri: this.props.computer.picture }}
                        />
                    </View>

                    <View style={styles.computerAttributeRow}>
                        <Text>Model Number:</Text>
                        <Text>{ this.props.computer.model_number.length > 18 ? (this.props.computer.model_number.substring(0, 15) + '...') : this.props.computer.model_number }</Text>
                    </View>

                    <View style={styles.computerAttributeRow}>
                        <Text style={styles.capitalizeText}>Color:</Text>    
                        <Text style={{color: `rgb(${convert.keyword.rgb((this.props.computer.color.toLowerCase()))})`, fontWeight:'bold'}}> { this.props.computer.color.length > 18 ? (this.props.computer.color.substring(0, 15) + '...') : this.props.computer.color }</Text>
                    </View>

                    <View style={styles.computerAttributeRow}>
                        <Text>Processor:</Text>        
                        <Text> { this.props.computer.processor.length > 18 ? (this.props.computer.processor.substring(0, 15) + '...') : this.props.computer.processor }</Text>
                    </View>
                    <View style={styles.computerAttributeRow}>
                        <Text> Ram:</Text>
                        <Text> { this.props.computer.ram.length > 18 ? (this.props.computer.ram.substring(0, 15) + '...') : this.props.computer.ram }</Text>
                    </View>
                    <View style={styles.computerAttributeRow}>
                        <Text> Memory:</Text>
                        <Text> { this.props.computer.memory.length > 18 ? (this.props.computer.memory.substring(0, 15) + '...') : this.props.computer.memory }</Text>
                    </View>
                    <View style={styles.computerAttributeRow}>
                        <Text> Vga:</Text>
                        <Text> { this.props.computer.vga.length > 18 ? (this.props.computer.vga.substring(0, 15) + '...') : this.props.computer.vga }</Text>
                    </View>

                    <View style={styles.computerAttributeRow}>
                        <Text> Operating System:</Text>
                        <Text> { this.props.computer.operating_system.length > 18 ? (this.props.computer.operating_system.substring(0, 15) + '...') : this.props.computer.operating_system }</Text>
                    </View>

                    <View style={styles.computerAttributeRow}>
                        <Text> Brand:</Text>
                        <Text style={{fontWeight:'bold', color:'#2089dc'}}>{ this.props.computer.brand.length > 18 ? (this.props.computer.brand.substring(0, 15) + '...') : this.props.computer.brand }</Text>
                    </View>

                    <Text style={styles.computerPrice}> $ {this.props.computer.price}</Text>

                    <View style={styles.computerAttributeRow}>
                        <Button
                            icon={
                                <Icon
                                    name="add-circle"
                                    size={20}
                                    color="white"
                                />
                            }
                            onPress={() => this.addToCart(this.props.computer)}
                        >
                        </Button>

                        <Text style={{marginTop:5, fontWeight:'bold', color:'#2089dc', fontSize:20}}>
                            { this.props.computer.quantity }
                        </Text>
        
                        <Button
                            icon={
                                <Icon
                                    name="remove-circle"
                                    size={20}
                                    color="white"
                                />
                            }

                            // *ngIf="item_added"
                            onPress={() => this.removeFromCart(this.props.computer)}
                            disabled={!this.state.noQuantity}
                        >
                        </Button>
                    </View>
                    

                </Card>
            </View>
        )
    }
} 

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
                    this.state.devices.computers.map((computer, i) => <Product key={i} computer={computer} addToCart={this.props.addToCart} />)
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