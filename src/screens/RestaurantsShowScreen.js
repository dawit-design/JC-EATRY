import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelpApi from "../api/yelpApi";

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    const resp = await yelpApi.get(`/${id}`);
    setRestaurant(resp.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return;
  <View>
    <Text>{restaurant.name}</Text>
    <FlatList
      data={restaurant.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image style={styles.imageStyle} source={{ uri: item }} />;
      }}
    />
  </View>;
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default RestaurantsShowScreen;
