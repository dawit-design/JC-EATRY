import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function RestaurantDetail (restaurant){
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: restaurant.image_urk}} />
            <Text style={styles.nameStyle}>{restaurant.name}</Text>
            <Text>{restaurant.rating} starts, {restaurant.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }
})

export default RestaurantDetail