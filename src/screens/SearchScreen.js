import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import fetchResturants from "../hooks/fetchResturants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [fetchApi, restaurants, errorMessage] = fetchResturants();

  //   price === '$' || '$$' || '$$$' || '$$$$'
  const filterByPrice = (price) => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price
    })
  }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => fetchApi(term)}
      />
      {<Text> we have found {restaurants.length} restaurants</Text>}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantsList restaurants={filterByPrice("$")} title="Cost Effective" />
        <RestaurantsList restaurants={filterByPrice("$$")} title="Bit Pricier" />
        <RestaurantsList restaurants={filterByPrice("$$$")} title="Bit Spender" />
        <RestaurantsList restaurants={filterByPrice("$$$$")} title="Expensive" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
