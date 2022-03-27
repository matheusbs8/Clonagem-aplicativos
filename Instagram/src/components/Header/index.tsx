import React from 'react';
import { SafeAreaView,StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Back, BackIcons, ImageLogo } from './style';

import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';

const SizeIcons = 25;


export default function Header () {
  return (
    <Back>
      <TouchableOpacity onPress={()=>{console.log("Instagram")}}>
        <ImageLogo source={require("../../../assets/Images/Logo/logo-text-dark-mode.png")}></ImageLogo>
      </TouchableOpacity>
        
        <BackIcons>
        <Icon.Button name="diff-added" size={SizeIcons} backgroundColor={"trasparent"} onPress={()=>{console.log("add")}}/>
        <Icon2.Button name="hearto" size={SizeIcons} backgroundColor={"trasparent"} onPress={()=>{console.log("heart")}}/>
        <Icon1.Button name="facebook-messenger" backgroundColor={'trasparent'} size={SizeIcons} color="white"  onPress={()=>{console.log("messenger")}}/>
        </BackIcons>
        
    </Back>
  );
}
