import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';
import { Background, ImageIcon, BackImage, BackIcons, ImageMeta, HorizontalScroll, Header} from './styles';
import { useEffect } from 'react';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import FontistoIcon from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Story_Circle from '../../components/Story-Circle/index';
import Stories from '../../Utils/Stories';
import Publicacao from '../../Components/Publicacao';


export default function Home() {
const sizeIcon = 21;

  const navigation = useNavigation();

  return ( 
  <Background>
    <Header>
      <TouchableOpacity onPress={()=>{console.log("dlcçlc,s")}}>
      <BackImage>
        <ImageMeta source={require('../../../assets/imagens/Instagram_logo.png')}></ImageMeta>
        <MaterialIcons name="keyboard-arrow-down" size={sizeIcon}></MaterialIcons>
      </BackImage>
      </TouchableOpacity>
      
    <BackIcons>
      <TouchableOpacity>
        <FontAwesome name="plus-square-o" size={sizeIcon+1}></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="hearto" size={sizeIcon}></AntDesign>
      </TouchableOpacity>
    <TouchableOpacity>
       <FontistoIcon  name="messenger" size={sizeIcon}></FontistoIcon>
    </TouchableOpacity>
    </BackIcons>
    
    </Header>

    <ScrollView showsVerticalScrollIndicator={false}>
     <HorizontalScroll horizontal={true} showsVerticalScrollIndicator={false}>
     {Stories.map((item, index) => (
             <Story_Circle key={index} NameOfPerfil={item.label} ImageOfPerfil={item.image} Visible={true} sizeBig={true} ></Story_Circle>
            ))}
     </HorizontalScroll>
     <Publicacao></Publicacao> 
     <Publicacao></Publicacao> 
    
     
    </ScrollView>
  </Background>
    

  );
}