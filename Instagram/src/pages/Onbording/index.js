import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import { Background, ImageLogo, ButtonAccount, ButtonLog, TextAccount, TextLog } from './styles';
import { useEffect } from 'react';
import BackButton from '../../Components/BlueButton';
import { useNavigation } from '@react-navigation/native';
export default function OnBoarding() {

  return (
    <Background>  
      <ImageLogo source={require('../../../assets/imagens/Instagram_logo.png')}></ImageLogo>
      <BackButton text='Create New Account'></BackButton>
      <ButtonLog>
        <TextLog>
         Log in
        </TextLog> 
      </ButtonLog>
     
    </Background>
    

  );
}