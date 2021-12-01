import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantsList = ({title, restaurants, navigation}) => {
    if(!restaurants.length) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onpress={() => navigation.navigate(''), {id: item.id}}>
                            <RestaurantDetail restaurant={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})


export default withNavigation(RestaurantsList)