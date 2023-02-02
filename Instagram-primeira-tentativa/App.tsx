import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

import { useFonts } from 'expo-font';


export default function App() {

  const [loaded] = useFonts({
     Segoe: require('./assets/fonts/Segoe UI.ttf'),
    // NunitoSans: require('./assets/fonts/NunitoSans-Regular.ttf'),
    // NunitoSansSemiBold: require('./assets/fonts/NunitoSans-SemiBold.ttf'),
     //NunitoSansBold: require('./assets/fonts/NunitoSans-Bold.ttf'),
     //NunitoSansExtraBold: require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
   });


  return (
    <Home></Home>
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
