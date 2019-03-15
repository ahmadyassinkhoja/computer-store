import React from 'react'
import { View } from 'react-native'

import { Input, Icon } from 'react-native-elements'

const AddProductInput = ({item, handleTextChange}) => (
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
            value=
                {
                    item.key=='picture' 
                        ? 'https://banner2.kisspng.com/20180429/zte/kisspng-computer-icons-avatar-user-laptop-5ae67d2c9fba76.3873242315250547646543.jpg'
                        : null
                }
        />
    </View>
)

export default AddProductInput