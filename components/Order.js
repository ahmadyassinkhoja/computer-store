import React from 'react'
import { TouchableHighlight } from 'react-native'

import { ListItem} from 'react-native-elements'

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

export default Order