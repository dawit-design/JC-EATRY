import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () =>{
    const [term, setTerm] = useState('')

    return (
       <View>
           <Text>Search Screen</Text>
           <SearchBar 
           term={term}
           onTermChange={setTerm}
           onTermSubmit={() => console.log('hey')}
           />
           <ScrollView>
                <Text>Cost Effective</Text>
                <Text>Bit Harder</Text>
                <Text>Bit Spender</Text>
           </ScrollView>
       </View>
    );
}

const styles = StyleSheet.create({})

export default SearchScreen;