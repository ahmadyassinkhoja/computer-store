import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight, Image  } from 'react-native'

import { Header, Badge, Platform, Icon, Card, ListItem } from 'react-native-elements'

import MainMenu from './MainMenu'

import AdminFooterToolbar from './AdminFooterToolbar'

class OrderDetails extends React.Component {

    render(){
        const order = this.props.navigation.getParam('order')

        return(
            <View style={{ flex: 1, position: 'relative'}}>
                <Header
                    style={{position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0}}
                    centerComponent={{
                        text: 'Order Details',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                    leftComponent={<Icon name='arrow-back' color='#fff' onPress={() => this.props.navigation.goBack() } /> }
                />

                <ScrollView style={{marginBottom:70}}>
                    {
                        order ? order.products.map( (product, i) => {
                            return(
                                <View key={i} style={styles.computerAttributeRow}>
                                    <View style={{width:'25%',}}>
                                        <Image
                                            style={styles.productImage}
                                            resizeMode="cover"
                                            source={{ uri: product.picture }}
                                        />
                                    </View>
                                    <View style={{width:'50%'}}>
                                        <Text> { product.name} </Text>
                
                                    </View>
                                    <View style={{width:'25%', height:'100%'}}>
                                        <Text style={styles.computerQuantity}> {product.quantity} </Text>
                                        <Text style={styles.computerPrice}> $ {product.price} </Text>
                                    </View>
                                </View>  
                            )
                        }) : null
                    }

                </ScrollView>

                <View  style={{position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0, backgroundColor:'#ee3', width:'100%', height:50}}>
                    <View style={styles.computerAttributeRow}>
                        <View style={{width:'80%'}}>
                            <Text style={{fontWeight:'bold'}}> Subtotal </Text>      
        
                        </View>
                        <View style={{width:'20%'}}>
                            <Text style={styles.computerPrice}> $ { order.total_price } </Text>      
                        </View>
                                    
                    </View>  
                </View>

                <AdminFooterToolbar navigation={this.props.navigation}/>
            </View>
        )
    }

}

export default OrderDetails

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
        padding: 7
    },
    computerPrice: {
        color:'red', 
        fontWeight:'bold', 
        fontSize: 15,
    },
    capitalizeText: {
        textTransform:'capitalize'
    }
})