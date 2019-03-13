import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { Icon  } from 'react-native-elements'

import IconBadge from 'react-native-icon-badge'


const CartIcon = ({totalQuantity, navigation, purchasedProducts, totalPrice, addToCart, removeFromCart, checkout}) => (
    <TouchableHighlight underlayColor={'white'} style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}} onPress={() => navigation.navigate('Cart', {totalQuantity, purchasedProducts, totalPrice, addToCart, removeFromCart, checkout})}>
        <IconBadge
            MainElement={
                <View style={{ width:50, height:50, marginTop: 23}}>
                    <Icon name='shopping-cart' color='#fff' style={{ width:70, height:70 }}/>
                </View>
            }
            BadgeElement={
                <Text style={{ color:'#FFFFFF'}}> {totalQuantity} </Text>
            }
            IconBadgeStyle={
                {   
                    width:20,
                    height:20,
                    backgroundColor: 'red',
                    marginTop: 15,
                }
            }
            Hidden={totalQuantity==0}
        />
    </TouchableHighlight>
)

export default CartIcon