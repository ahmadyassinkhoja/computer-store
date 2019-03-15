import React from 'react'
import { StyleSheet, View, Text , Image } from 'react-native'

import { Button, Card } from 'react-native-elements'

import convert from 'color-convert'

const AdminProduct = ({item, navigation, removeItem}) => (
    <View>
        <Card title= {item.name}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.productImage}
                    resizeMode="cover"
                    source={{ uri: item.picture }}
                />
            </View>

            <View style={styles.computerAttributeRow}>
                <Text>Model Number:</Text>
                <Text>{ item.model_number.length > 18 ? (item.model_number.substring(0, 15) + '...') : item.model_number }</Text>
            </View>

            <View style={styles.computerAttributeRow}>
                <Text style={styles.capitalizeText}>Color:</Text>    
                <Text style={{color: `rgb(${convert.keyword.rgb((item.color.toLowerCase()))})`, fontWeight:'bold'}}> { item.color.length > 18 ? (item.color.substring(0, 15) + '...') : item.color }</Text>
            </View>

            <View style={styles.computerAttributeRow}>
                <Text>Processor:</Text>        
                <Text> { item.processor.length > 18 ? (item.processor.substring(0, 15) + '...') : item.processor }</Text>
            </View>
            <View style={styles.computerAttributeRow}>
                <Text> Ram:</Text>
                <Text> { item.ram.length > 18 ? (item.ram.substring(0, 15) + '...') : item.ram }</Text>
            </View>
            <View style={styles.computerAttributeRow}>
                <Text> Memory:</Text>
                <Text> { item.memory.length > 18 ? (item.memory.substring(0, 15) + '...') : item.memory }</Text>
            </View>
            <View style={styles.computerAttributeRow}>
                <Text> Vga:</Text>
                <Text> { item.vga.length > 18 ? (item.vga.substring(0, 15) + '...') : item.vga }</Text>
            </View>

            <View style={styles.computerAttributeRow}>
                <Text> Operating System:</Text>
                <Text> { item.operating_system.length > 18 ? (item.operating_system.substring(0, 15) + '...') : item.operating_system }</Text>
            </View>

            <View style={styles.computerAttributeRow}>
                <Text> Brand:</Text>
                <Text style={{fontWeight:'bold', color:'#2089dc'}}>{ item.brand.length > 18 ? (item.brand.substring(0, 15) + '...') : item.brand }</Text>
            </View>

            <Text style={styles.computerPrice}> $ {item.price}</Text>

            <View style={styles.computerAttributeRow}>
                <Button buttonStyle={{ width: 100 }} title='Edit' onPress={() => navigation.navigate('EditProduct', {item})} />
                <Button buttonStyle={{ width: 100, backgroundColor:'#f21847'}} title='Remove' onPress={() => removeItem(item)} />
            </View>
            
        </Card>
    </View>
)

export default AdminProduct

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