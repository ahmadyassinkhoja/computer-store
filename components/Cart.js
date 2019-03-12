import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight, ScrollView } from 'react-native'

import {  Card, Button, Icon, Input, Header, Badge } from 'react-native-elements'

import EmptyCartCard from './EmptyCartCard'

import CartProduct from './CartProduct'

class Cart extends React.Component {

    componentDidMount(){
        // console.log('totalPrice', this.props.navigation.getParam('totalPrice'))
        // console.log('totalQuantity', this.props.navigation.getParam('totalQuantity'))
        // console.log('purchasedProducts', this.props.navigation.getParam('purchasedProducts'))
    }
    render(){
        const totalPrice = this.props.navigation.getParam('totalPrice')
        const totalQuantity = this.props.navigation.getParam('totalQuantity')
        const purchasedProducts = this.props.navigation.getParam('purchasedProducts')
        // const addToCart = this.props.navigation.getParam('addToCart')
        // const removeFromCart = this.props.navigation.getParam('removeFromCart')


        return(
            <View style={{ flex: 1, position: 'relative'}}>
                <Header
                    style={{position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0}}
                    centerComponent={{
                        text: 'MY CART',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                    leftComponent={<Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack() } /> }
                />
                
                <ScrollView style={{marginBottom:20}}>

                    <Text> {totalPrice} </Text>
                    {
                        totalQuantity == 0 ?  
                            <EmptyCartCard navigation={this.props.navigation}/> 
                            : purchasedProducts.map( (computer, i) => <CartProduct key={i} computer={computer} />)
                    }
                </ScrollView>
            </View>
        )
    }
}

export default Cart