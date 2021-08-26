import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>I'm ready to get started!</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
  }
})

export default App
