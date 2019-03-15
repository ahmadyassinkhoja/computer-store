import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native'

import { Header, Icon, Input  } from 'react-native-elements'

import MainMenu from './MainMenu'
import MainMenuIcon from './icons/MainMenuIcon'
import AdminFooterToolbar from './AdminFooterToolbar'

import { itemsFormInput } from '../assets/data/itemsFormInput'

const EditProductInput = ({product ,item, handleTextChange}) => (
    <View>
        <Input
            shake={true}
            leftIcon={
                <Icon
                    name={item.iconName}
                    size={24}
                    color='black'
                />}
            placeholder={item.name}
            onChangeText={(text) => handleTextChange(text, item)}
            value={product[item.key].toString()}
        />
    </View>
)

class EditProduct extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            modalVisible: false,
            item:{
                _id: '',
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
            },
        }
    }

    componentDidMount(){
        const product = this.props.navigation.getParam('item')
        const item = this.state.item

        for(let key in item){
            item[key] = product[key]
        }
        item._id = product._id
        
        const copyState = Object.assign({}, item)
        this.setState({copyState})
    }

    handleTextChange = (text, itemFormInput) => {
        switch(itemFormInput.key){
        case 'name':
            if(text != null){
                const item = this.state.item
                item.name = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'price': 
            if(!isNaN(text) && text != null){
                const item = this.state.item
                item.price = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'model_number':
            const item = this.state.item
            item.model_number = text
            const copyState = Object.assign({}, item)
            this.setState({copyState})
            break
        case 'color':
            if(text != null){
                const item = this.state.item
                item.color = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})

            }
            break
        case 'processor':
            if(text != null){
                const item = this.state.item
                item.processor = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'ram':
            if(text != null){
                const item = this.state.item
                item.ram = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'memory':
            if(text != null){
                const item = this.state.item
                item.memory = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'vga':
            if(text != null){
                const item = this.state.item
                item.vga = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'operating_system':
            if(text != null){
                const item = this.state.item
                item.operating_system = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'brand':
            if(text != null){
                const item = this.state.item
                item.brand = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'picture':
            if(text != null){
                const item = this.state.item
                item.picture = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
            }
            break
        case 'category':
            if(text != null){
                const item = this.state.item
                item.category = text
                const copyState = Object.assign({}, item)
                this.setState({copyState})
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

    editItem = () => {
        const item = this.state.item

        fetch(`https://areeba-computer-store.herokuapp.com/editItem/${item._id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.text())
            .then(responseData => console.log(responseData))
            .then(() => this.getItems())
            .catch(err => console.log(err))

        this.props.navigation.navigate('Admin')
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

                    { itemsFormInput.map( (item, i) => <EditProductInput product={this.state.item} item={item} key={i} handleTextChange={this.handleTextChange}/>) }
                   
                </ScrollView>

                <TouchableHighlight onPress={this.editItem} style={{position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0, backgroundColor:'#33cc33', width:'100%', height:50, padding:20}}>
                    <View style={styles.computerAttributeRow}>
                        <View style={{width:'90%'}}>
                            <Text style={{fontWeight:'bold', color:'white', textAlign:'center'}}> Update Product </Text>      

                        </View>
                    </View>  
                </TouchableHighlight>

                <AdminFooterToolbar navigation={this.props.navigation}/>
            </View>
        )
    }

}

export default EditProduct

const styles = StyleSheet.create({
    computerAttributeRow:{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})