import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'

import { Icon } from 'react-native-elements'

const AdminFooterToolbar = ({navigation}) => (
    <View  style={{position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, backgroundColor:'#eee', width:'100%', height:50, padding:20}}>
        <View style={styles.computerAttributeRow}>
            <TouchableHighlight onPress={() => navigation.navigate('Admin')}>
                <Icon name='store' color='#333'/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate('AddProduct')}>
                <Icon name='add-shopping-cart' color='#333'/>
            </TouchableHighlight>
                        
            <TouchableHighlight onPress={() => navigation.navigate('Orders')}>
                <Icon name='shopping-basket' color='#333'/>
            </TouchableHighlight>
                
        </View>  
    </View>
) 

export default AdminFooterToolbar

const styles = StyleSheet.create({
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})