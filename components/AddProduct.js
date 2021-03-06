import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native'

import { Header } from 'react-native-elements'

import MainMenu from './MainMenu'
import MainMenuIcon from './icons/MainMenuIcon'
import AdminFooterToolbar from './AdminFooterToolbar'

import { itemsFormInput } from '../assets/data/itemsFormInput'
import AddProductInput from './AddProductInput'

class AddProduct extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            modalVisible: false,
            name: '',
            price: 0,
            model_number: '',
            color: '',
            processor: '',
            ram: '',
            memory: '',
            vga: '',
            operating_system: '',
            brand: '',
            picture: 'https://banner2.kisspng.com/20180429/zte/kisspng-computer-icons-avatar-user-laptop-5ae67d2c9fba76.3873242315250547646543.jpg',
            category: ''
        }
    }

    handleTextChange = (text, item) => {
        switch(item.key){
        case 'name':
            if(text != null){
                this.setState({name: text}) 
            }
            break
        case 'price': 
            if(!isNaN(text) && text != null){
                this.setState({price: text}) 
            }
            break
        case 'model_number':this.setState({model_number: text}) 
            break
        case 'color':
            if(isNaN(text) && text != null){
                this.setState({color :text}) 

            }
            break
        case 'processor':
            if(text != null){
                this.setState({processor: text}) 
            }
            break
        case 'ram':
            if(text != null){
                this.setState({ram: text}) 
            }
            break
        case 'memory':
            if(text != null){
                this.setState({memory: text}) 
            }
            break
        case 'vga':
            if(text != null){
                this.setState({vga: text}) 
            }
            break
        case 'operating_system':
            if(text != null){
                this.setState({operating_system: text}) 
            }
            break
        case 'brand':
            if(text != null){
                this.setState({brand: text}) 
            }
            break
        case 'picture':
            if(text != null){
                this.setState({picture: text}) 
            }
            break
        case 'category':
            if(text != null){
                this.setState({category: text}) 
            }
            break
        }
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    }

    getItems = () => {
        fetch('https://areeba-computer-store.herokuapp.com/items')
            .then(res => res.json())
            .then(items => this.setState({items}))
            .catch(err => console.log(err))
    }

    addProduct = () => {
        const { name, price, model_number, color, processor, ram, memory, vga, operating_system, brand, picture, category} = this.state

        if(name != null && price != null && model_number != null && color != null && processor != null && ram != null && memory != null && vga != null && operating_system != null && brand != null && picture != null && category != null) {         
            const product = {
                name: name,
                price,
                model_number,
                color,
                processor,
                ram,
                memory,
                vga,
                operating_system,
                brand,
                picture,
                category,
            }
            
            fetch('https://areeba-computer-store.herokuapp.com/addItem', {
                method: 'POST',
                body: JSON.stringify(product),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.text())
                .then(responseData => console.log(responseData ))
                .then(() => this.getItems())
                .then(() => this.props.navigation.navigate('Admin'))
                .catch(err => console.log(err))
        }
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
                        text: 'Add Product',
                        style: { color: '#fff', fontSize:18, fontWeight:'bold' }
                    }}
                />
        
                <MainMenu navigation={this.props.navigation} modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>

                <ScrollView style={{marginBottom:120}}>

                    { itemsFormInput.map( (item, i) => <AddProductInput item={item} key={i} handleTextChange={this.handleTextChange}/>) }
                   
                </ScrollView>

                <TouchableHighlight onPress={this.addProduct} style={{position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0, backgroundColor:'#33cc33', width:'100%', height:50, padding:20}}>
                    <View style={styles.computerAttributeRow}>
                        <View style={{width:'90%'}}>
                            <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}}> Add Product </Text>      

                        </View>
                    </View>  
                </TouchableHighlight>

                <AdminFooterToolbar navigation={this.props.navigation}/>
            </View>
        )
    }

}

export default AddProduct

const styles = StyleSheet.create({
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})