import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export function Conta() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Conta</Text>
    </View>
  );
}

export default Conta

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