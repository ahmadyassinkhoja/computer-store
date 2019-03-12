import React from 'react'
import { View, Text } from 'react-native'

import { Icon  } from 'react-native-elements'

import IconBadge from 'react-native-icon-badge'

const CartIcon = ({totalQuantity}) => (
    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
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
    </View>
)

export default CartIcon