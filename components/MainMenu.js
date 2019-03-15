import React from 'react'
import { View, Modal, TouchableHighlight } from 'react-native'
import { Icon, ListItem} from 'react-native-elements'

const list = [
    {
        title: 'Home',
        icon: 'home',
        link: 'Home'
    },
    {
        title: 'Admin',
        icon: 'account-circle',
        link: 'Admin'
    },
]

const MainMenu = ({navigation, modalVisible, setModalVisible}) => (
    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.')
        }}>
        <View style={{backgroundColor:'#eee', height:'100%'}}>
            <View style={{position:'relative',  flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', backgroundColor:'#eee'}}>
                <View style={{position:'absolute', right: 0, top: 0, padding: 10 }}>
                    <TouchableHighlight
                        onPress={() => { setModalVisible(!modalVisible) }}>
                        <Icon name="close"  />
                    </TouchableHighlight>
                </View>
            </View>

            <View  style={{
                width: '100%', height: '90%'}}>
                {
                    list.map((item, i) => (
                        <TouchableHighlight key={i} onPress={() => {  
                            setModalVisible(!modalVisible) 
                            navigation.navigate(item.link) 
                        }}>
                            <ListItem
                                style={{ borderBottomColor:'#ddd', borderBottomWidth: 1}}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                rightIcon={{ name: 'chevron-right' }}
                            />
                        </TouchableHighlight>
                    ))
                }
            </View>
        </View>
    </Modal>
)

export default MainMenu