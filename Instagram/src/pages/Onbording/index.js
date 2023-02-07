import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import { Background, ImageLogo, ButtonAccount, ButtonLog, TextAccount, TextLog } from './styles';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function OnBoarding() {

  return (
    <Background>  
      <ImageLogo source={require('../../../assets/imagens/Instagram_logo.png')}></ImageLogo>
      <ButtonAccount>
        <TextAccount>
        Create new Account
        </TextAccount>
      </ButtonAccount>
      <ButtonLog>
        <TextLog>
         Log in 
        </TextLog> 
      </ButtonLog>
     
    </Background>
    

  );
}