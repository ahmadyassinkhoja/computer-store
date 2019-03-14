import React from 'react'
import { StyleSheet, View, ScrollView, Text , Modal, TouchableHighlight, Image } from 'react-native'

import { Header, Badge, Platform, Icon, Button, Card } from 'react-native-elements'

import MainMenu from './MainMenu'
import MainMenuIcon from './icons/MainMenuIcon'
import AdminFooterToolbar from './AdminFooterToolbar'
import AdminProduct from './AdminProduct'

class Admin extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            modalVisible: false,
            items: []
        }
    }

    componentDidMount(){
        this.getItems()
    }

    componentDidUpdate(){
        this.getItems()
    }

    getItems = () => {
        fetch('https://areeba-computer-store.herokuapp.com/items')
            .then(res => res.json())
            .then(items => this.setState({items}))
            .catch(err => console.log(err))
    }
    
    removeItem = (item) => {
        fetch(`https://areeba-computer-store.herokuapp.com/removeItem/${item._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.text())
            .then(responseData => console.log(responseData ))
            .then(() => this.getItems())
            .catch(err => console.log(err))
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
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
                        text: 'Admin Panel',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                />
        
                <MainMenu navigation={this.props.navigation} modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>

                <ScrollView style={{marginBottom:70}}>
                    {
                        this.state.items ? this.state.items.map( (item, i) => <AdminProduct key={i} item={item} navigation={this.props.navigation} removeItem={this.removeItem}/>) : null
                    }

                </ScrollView>

                <AdminFooterToolbar navigation={this.props.navigation}/>
            </View>
        )
    }

}

export default Admin

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    productImage: {
        width: 200, 
        height: 200
    },
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    computerPrice: {
        color:'red', 
        fontWeight:'bold', 
        fontSize: 19
    },
    capitalizeText: {
        textTransform:'capitalize'
    }
})