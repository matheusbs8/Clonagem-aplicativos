import React from 'react';
import { SafeAreaView,StatusBar, StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from '../../components/Header';
import Story_Circle from '../../components/Story-Circle/index';
import {HorizontalScroll, Line} from './style'


interface CircleStoryProps {
  NameOfPerfil: string;
  ImagepOfPerfil: any;
  Visible: boolean;
  Futurefunction?: any;
}

export default function Home () {
  return (
    <SafeAreaView style={{backgroundColor:'black', height:'100%'}}>
        <StatusBar></StatusBar>
        <Header></Header>
        <HorizontalScroll horizontal={true} showsVerticalScrollIndicator={false}>
            <Story_Circle NameOfPerfil='Seu Story' ImageOfPerfil='../../../assets/Images/StoryCircle/perfil.jpg' Visible={false} ></Story_Circle>
            {Array.from({ length: 5 }).map((item, index) => (
             <Story_Circle NameOfPerfil='Sticth' ImageOfPerfil='../../../assets/Images/StoryCircle/perfil.jpg' Visible={true} ></Story_Circle>
            ))}
            {Array.from({ length: 5 }).map((item, index) => (
              <Story_Circle NameOfPerfil='Sticth' ImageOfPerfil="require('../../../assets/Images/StoryCircle/perfil.jpg')" Visible={false} ></Story_Circle>
            ))}
          </HorizontalScroll>
          <Line/>
        
    </SafeAreaView>
  );
}
