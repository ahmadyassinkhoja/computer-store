import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight } from 'react-native'

import {  Card, Button, Icon, Input   } from 'react-native-elements'

import convert from 'color-convert'

class CartProduct extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            noQuantity: false
        }
    }


    render(){
        return(
            <View style={styles.computerAttributeRow}>
                <View style={{width:'25%',}}>
                    <Image
                        style={styles.productImage}
                        resizeMode="cover"
                        source={{ uri: this.props.computer.picture }}
                    />
                </View>
                <View style={{width:'50%'}}>
                    <Text> { this.props.computer.name} </Text>
                    
                </View>
                <View style={{width:'25%', height:'100%'}}>
                    <Text style={styles.computerQuantity}> {this.props.computer.quantity} </Text>
                    <Text style={styles.computerPrice}> $ {this.props.computer.price} </Text>
                </View>
                        
            </View>  
        )
    }
} 

export default CartProduct

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    productImage: {
        width: 60, 
        height: 60
    },
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor:'#eee',
        marginTop: 20
    },
    computerQuantity:{
        color:'#2089dc', 
        fontWeight:'bold', 
        fontSize: 15,
        position:'absolute',
        top:0,
        right: 0
    },
    computerPrice: {
        color:'red', 
        fontWeight:'bold', 
        fontSize: 15,
        position:'absolute',
        bottom:0,
        right: 0
    },
    capitalizeText: {
        textTransform:'capitalize'
    }
})