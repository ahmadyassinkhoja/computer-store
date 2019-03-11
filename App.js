import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'

import { Button, ThemeProvider, Header, Badge, withBadge, Icon  } from 'react-native-elements'

import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions
} from 'react-navigation'

import IconBadge from 'react-native-icon-badge'

import Products from './components/Products'
import Cart from './components/Cart'



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


class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            totalQuantity: 0,
            totalPrice: 0,
            cartEmpty: false,
            purchasedProducts: [],
            total: 0
        }
    }

    addToCart = (product) => {
        this.setState({cartEmpty: false})
        this.incrementItemFromCart(product)
        this.calculateTotalPricePerItem(product)

        const index = this.state.purchasedProducts.indexOf(product)
        if (index < 0) {
            let purchasedProducts = this.state.purchasedProducts
            purchasedProducts.push(product)
            this.setState({purchasedProducts})
        }

        this.calculateTotalPrice()

        let totalPrice = this.state.total
        this.setState({ totalPrice })
    }
    
    removeFromCart = (product) => {

    }

    incrementItemFromCart = (product) => {
        let totalQuantity = this.state.totalQuantity + 1
        this.setState({ totalQuantity })
    }

    calculateTotalPricePerItem(product) {
        product.total = product.price * product.quantity
    }

    calculateTotalPrice() {
        this.state.purchasedProducts.reduce((accum, current) => {
            return (this.state.total = accum += current.total)
        }, 0)
    }

    render() {
        return (
            <ScrollView>
                <Header
                    centerComponent={{
                        text: 'Computer Store',
                        style: { color: '#fff' }
                    }}
                    rightComponent={<CartIcon totalQuantity={this.state.totalQuantity}/> }
                />

                <Products addToCart={this.addToCart}/>
                {
                    !this.state.cartEmpty ? 
                        <View style={styles.shopping}>
                            <View onPress={() => this.props.navigation.navigate('Cart')} style={{alignItems: 'center'}}>
                                <Badge value={this.state.totalQuantity} />
                                <Text>
                        CheckOut
                                </Text>

                                <Badge value={this.state.totalPrice} />
                            </View>
                        </View>

                        : null
                }
            </ScrollView>
        )
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: App
        },
        Cart: {
            screen: Cart
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
)

export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
    shopping: {

    }
})
