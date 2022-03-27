import React from 'react';
import { SafeAreaView,StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Story_Circle from '../../components/Story-Circle/index';


interface CircleStoryProps {
  NameOfPerfil: string;
  ImagepOfPerfil: string;
  Visible: boolean;
  Futurefunction?: any;
}

export default function Home () {
  return (
    <SafeAreaView style={{backgroundColor:'black', height:'100%'}}>
        <StatusBar></StatusBar>
        <Header></Header>
        <Story_Circle NameOfPerfil='a' ImagepOfPerfil='a' Visible={true} ></Story_Circle>
    </SafeAreaView>
  );
}
