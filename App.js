import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'

import { Header, Badge  } from 'react-native-elements'

import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions
} from 'react-navigation'

import Products from './components/Products'
import Cart from './components/Cart'

import CartIcon from './components/icons/CartIcon'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            navigation: '',
            totalQuantity: 0,
            totalPrice: 0,
            cartEmpty: false,
            purchasedProducts: [],
            total: 0
        }
    }

    componentDidMount(){
        const navigation = this.props.navigation
        this.setState({navigation})
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

    render() {
        return (
            <ScrollView>
                <Header
                    centerComponent={{
                        text: 'Computer Store',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                    rightComponent={<CartIcon addToCart={this.addToCart} removeFromCart={this.removeFromCart} purchasedProducts={this.state.purchasedProducts} totalPrice={this.state.totalPrice} totalQuantity={this.state.totalQuantity} navigation={this.state.navigation} /> }
                />

                <Text> { this.state.totalPrice } </Text>

                <Products addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
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
