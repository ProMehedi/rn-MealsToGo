import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RestaurantInfo from '../components/RestaurantInfo'

const RestaurantsScreen = () => {
  const [query, setQuery] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search Here"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </View>
      <View style={styles.content}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
  },
  searchBar: {
    padding: 15,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0'
  }
})

export default RestaurantsScreen
