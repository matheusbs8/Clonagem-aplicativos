import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';
import { Background,BackSearch, ImageIcon, BackImage, BackIcons, ImageMeta, HorizontalScroll, Header} from './styles';
import { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import FontistoIcon from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


import SearchBar from '../../Components/SearchBar';
export default function SearchScreen() {
const sizeIcon = 21;

  const navigation = useNavigation();
  const [text, onchangeText] =useState('') 

  useEffect(() => {
    console.log(text)
  }, [text]);
  return ( 
  <Background>
    <BackSearch>

      <SearchBar text={text} onchangeText={onchangeText}></SearchBar>

    </BackSearch>
    <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom:'5%'}}>

    </ScrollView>
  </Background>
    

  );
}