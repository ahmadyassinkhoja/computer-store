import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight  } from 'react-native'

import { Header, Badge, Platform, Icon, Card, ListItem } from 'react-native-elements'

import MainMenu from './MainMenu'

import MainMenuIcon from './icons/MainMenuIcon'
import AdminFooterToolbar from './AdminFooterToolbar'

const Order = ({order, navigation, index}) => (
    <TouchableHighlight onPress={() => navigation.navigate('OrderDetails', {order})}>
        <ListItem
            style={{ borderBottomColor:'#ddd', borderBottomWidth: 1}}
            title={`Order # ${index+1}`}
            leftIcon={{ name: 'shop' }}
            rightIcon={{ name: 'chevron-right' }}
        />
    </TouchableHighlight>
)

class Orders extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            modalVisible: false,
            orders: []
        }
    }

    componentDidMount(){
        this.getOrders()
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    }

    getOrders = () => {
        fetch('https://areeba-computer-store.herokuapp.com/orders')
            .then(res => res.json())
            .then(orders => this.setState({orders}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <View style={{ flex: 1, position: 'relative'}}>
                <Header
                    style={{position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0}}
                    leftComponent={
                        <MainMenuIcon setModalVisible={this.setModalVisible}/>
                    }
                    centerComponent={{
                        text: 'All Orders',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                />
        
                <MainMenu navigation={this.props.navigation} modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>

                <ScrollView style={{marginBottom:70}}>
                    {
                        this.state.orders ? this.state.orders.map( (order, i) => <Order index={i} key={i} order={order} navigation={this.props.navigation}/>) : null
                    }

                </ScrollView>

                <AdminFooterToolbar navigation={this.props.navigation}/>
            </View>
        )
    }

}

export default Orders

const styles = StyleSheet.create({
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})