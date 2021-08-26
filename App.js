import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { Searchbar } from 'react-native-paper'

const App = () => {
  const [query, setQuery] = useState('')

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="Search Here"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
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
  }
})

export default App
