import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <>

    <View style={styles.container1}>
       <Link to={'/about'} style={styles.text}>About</Link>
        <Link to={'/contact'} style={styles.text}>Contact</Link>
        <Link to={'/servicess'} style={styles.text}>Services</Link>
    </View>
    <View style={styles.container}>
      <Text style={styles.text1}> Hello World</Text>

</View> 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Set your desired background color (e.g., blue)
    backgroundColor: '#000', 
  },
  container1:{
    flexDirection: 'row', // Align children in a row
    justifyContent: 'space-around', // Space between links
    alignItems: 'center', // Center vertically
    padding: 20,
    backgroundColor: '#000', 
    backgroundColor: '#4A90E2', // Set your desired background color
    // Background color

  },
  text: {
    color: '#FFFFFF', // Font color
    fontSize: 30, // Adjust font size
  },

  text1: {
    color: '#888888', // Shadow color
    top: 2, // Adjust for shadow effect
    left: 2,
    marginRight:17, // Adjust for shadow effect
    fontSize: 70, // Adjust font size
  },
});

export default App;
