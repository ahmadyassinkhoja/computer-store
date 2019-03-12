import React from 'react'
import { View, Text, Image } from 'react-native'

import {  Card, Button } from 'react-native-elements'

const EmptyCartCard = ({navigation}) => (
    <Card>
        <View>
            <Image
                resizeMode="cover"
                source={{ uri: 'https://img.icons8.com/dotty/80/000000/add-shopping-cart.png' }}
                style={{ width: 100, height: 100, marginLeft:'30%', marginBottom:'20%'}}
            />

            <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', color:'#2089dc', marginBottom:'20%'}}> You have no Items Yet </Text>
        </View>

        <Button
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='CONTINUE SHOPPING'
            onPress={() => navigation.navigate('Home')}
        />

    </Card>
) 

export default EmptyCartCard