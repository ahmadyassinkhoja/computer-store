import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, TouchableHighlight } from 'react-native'

import {  Card, Button, Icon, Input, Header, Badge } from 'react-native-elements'

import EmptyCartCard from './EmptyCartCard'

import CartProduct from './CartProduct'

class Cart extends React.Component {

    checkout = () => {
        const AppCheckout = this.props.navigation.getParam('checkout')

        AppCheckout()
    }

    render(){
        const totalPrice = this.props.navigation.getParam('totalPrice')
        const totalQuantity = this.props.navigation.getParam('totalQuantity')
        const purchasedProducts = this.props.navigation.getParam('purchasedProducts')

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
                    {
                        totalQuantity == 0 ?  
                            <EmptyCartCard navigation={this.props.navigation}/> 
                            : purchasedProducts.map( (computer, i) => <CartProduct key={i} computer={computer} />)
                    }
                </ScrollView>

                {
                    totalQuantity == 0 ? null :  
                        <View>
                    
                            <View  style={{position: 'absolute',
                                bottom: 60,
                                left: 0,
                                right: 0, backgroundColor:'#ee3', width:'100%', height:50, padding:20}}>
                                <View style={styles.computerAttributeRow}>
                                    <View style={{width:'60%'}}>
                                        <Text style={{fontWeight:'bold'}}> Subtotal </Text>      
    
                                    </View>
                                    <View style={{width:'30%'}}>
                                        <Text style={styles.computerPrice}> $ { totalPrice } </Text>      
                                    </View>
                                
                                </View>  
                            </View>
                   
                            <TouchableHighlight onPress={this.checkout} style={{position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0, backgroundColor:'#33cc33', width:'100%', height:50, padding:30}}>
                                <View style={styles.computerAttributeRow}>
                                    <View style={{width:'90%'}}>
                                        <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}}> Check Out </Text>      
    
                                    </View>
                                </View>  
                            </TouchableHighlight>
                        </View>
                }
            </View>
        )
    }
}

export default Cart

const styles = StyleSheet.create({
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    computerPrice: {
        color:'red', 
        fontWeight:'bold', 
        fontSize: 19
    }
})