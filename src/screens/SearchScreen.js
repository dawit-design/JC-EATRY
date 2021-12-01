import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import fetchResturants from "../hooks/fetchResturants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [fetchApi, restaurants, errorMessage] = fetchResturants();

  const filterByPrice = (price) => {
    //   price === '$' || '$$' || '$$$' || '$$$$'
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };
  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => fetchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {<Text> we have found {restaurants.length} restaurants</Text>}
      <ScrollView>
        <RestaurantsList results={filterByPrice("$")} title="Cost Effective" />
        <RestaurantsList results={filterByPrice("$$")} title="Bit Pricier" />
        <RestaurantsList results={filterByPrice("$$$")} title="Bit Spender" />
        <RestaurantsList results={filterByPrice("$$$$")} title="Bit Expensive" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
