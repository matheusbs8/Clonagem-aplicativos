import React from 'react';
import { SafeAreaView,StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
export default function Home () {
  return (
    <SafeAreaView>
        <StatusBar></StatusBar>
      <Header></Header>
    </SafeAreaView>
  );
}
