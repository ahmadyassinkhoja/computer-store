import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'

import { Header, Badge, Platform } from 'react-native-elements'

import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions
} from 'react-navigation'

import Products from './components/Products'
import Cart from './components/Cart'

import CartIcon from './components/icons/CartIcon'

// import devices from './devices'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            navigation: '',
            cartEmpty: false,
            totalQuantity: 0,
            totalPrice: 0,
            total: 0,
            purchasedProducts: [],
            orders: [],
            devices: []
        }
    }

    componentDidMount(){
        const navigation = this.props.navigation
        this.setState({navigation})

        fetch('https://areeba-computer-store.herokuapp.com/items')
            .then(res => res.json())
            .then(items => this.setState({devices: items}))
            .catch(err => console.log(err))
    }

    addToCart = (product) => {
        this.setState({cartEmpty: false})
        this.incrementItemFromCart()
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
        if (this.checkIfClientOrdered(product)) {
            this.decrementItemFromCart()
            this.calculateTotalPricePerItem(product)
        }
        if (this.state.totalQuantity <= 0) {
            this.state.cartEmpty = true
        }

        this.calculateTotalPrice()

        let totalPrice = this.state.total
        this.setState({ totalPrice })

        const index = this.state.purchasedProducts.indexOf(product)
        if (product && product.quantity == 0) {
            let purchasedProducts = this.state.purchasedProducts
            purchasedProducts.splice(index, 1)
            this.setState({purchasedProducts})
        }
    }
    checkIfClientOrdered(product) {
        if (product.quantity >= 0) {
            return true
        }
        return false
    }

    incrementItemFromCart = () => {
        let totalQuantity = this.state.totalQuantity + 1
        this.setState({ totalQuantity })
    }

    decrementItemFromCart() {
        let totalQuantity = this.state.totalQuantity - 1
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

    checkout = () => {
        const order_data = {
            purchasedProducts: this.state.purchasedProducts,
            total_price: this.state.totalPrice,
            total_quantity: this.state.totalQuantity,
        }
        // this.addOrder(order_data)
        // this.resetCartProducts()

        fetch('https://areeba-computer-store.herokuapp.com/addOrder', {
            method: 'POST',
            body: JSON.stringify(order_data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(order => console.log(order))
            .catch(err => console.log(err))
    }
    addOrder(order_data) {
        let orders = this.state.orders
        orders.push(order_data)

        this.setState({orders})
    }

    resetCartProducts() {
        let totalQuantity = this.state.totalQuantity
        let totalPrice = this.state.totalPrice
        let purchasedProducts = this.state.purchasedProducts
        let cartEmpty = this.state.cartEmpty
        
        totalQuantity = 0
        totalPrice = 0
        purchasedProducts = []
        cartEmpty = true

        this.setState({totalQuantity, totalPrice, purchasedProducts, cartEmpty})

        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={{ flex: 1, position: 'relative'}}>
                <Header
                    style={{position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0}}
                    centerComponent={{
                        text: 'Computer Store',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                    rightComponent={<CartIcon checkout={this.checkout} addToCart={this.addToCart} removeFromCart={this.removeFromCart} purchasedProducts={this.state.purchasedProducts} totalPrice={this.state.totalPrice} totalQuantity={this.state.totalQuantity} navigation={this.state.navigation} /> }
                />
                <ScrollView style={{marginBottom:20}}>
                    <Products devices={this.state.devices} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
                </ScrollView>
            </View>
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
