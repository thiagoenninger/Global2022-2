import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: '#fff',
    fontSize: 20,
  }
})
