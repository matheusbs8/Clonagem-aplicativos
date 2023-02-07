import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Background, ImageIcon, Rodape, BackIcon, ImageMeta, TextFrom } from './styles';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function SplashScreen() {

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2500);

  })

  const navigation = useNavigation();

  return (
    <Background>
       <BackIcon>
         <ImageIcon source={require('../../../assets/imagens/instagram-icon.png')}></ImageIcon>
      </BackIcon>
     <Rodape>
      <TextFrom>from</TextFrom>
      <ImageMeta source={require('../../../assets/imagens/meta.png')}></ImageMeta>
     </Rodape>  
    </Background>
    

  );
}