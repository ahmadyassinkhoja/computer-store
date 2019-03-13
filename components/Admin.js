import React from 'react'
import { StyleSheet, View, ScrollView, Text , Modal, TouchableHighlight } from 'react-native'

import { Header, Badge, Platform, Icon } from 'react-native-elements'

import MainMenu from './MainMenu'

import CartIcon from './icons/CartIcon'
import MainMenuIcon from './icons/MainMenuIcon'

class Admin extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    }

    render(){
        return(
            <View>
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
            </View>
        )
    }

}

export default Admin