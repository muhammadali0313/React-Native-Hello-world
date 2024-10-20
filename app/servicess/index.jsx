import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Services</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
  