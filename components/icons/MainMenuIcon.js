import React from 'react'
import { View, TouchableHighlight } from 'react-native'

import { Icon } from 'react-native-elements'

const MainMenuIcon = ({setModalVisible}) => (
    <View>
        <TouchableHighlight
            onPress={() => {
                setModalVisible(true)
            }}>
            <Icon name='menu' color='#fff'/>
        </TouchableHighlight>
    
    </View>
)

export default MainMenuIcon