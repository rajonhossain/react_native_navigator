import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function insert({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={()=> navigation.navigate('aboutss')}>Open up App.js to start working on your app! insert</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
