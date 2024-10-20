import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={style.container}>
      <Text style={style.text}>About</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    color: '#FFFFFF', // Font color
    fontSize: 50,
  },
});
