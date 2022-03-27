import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {Back, ImagePerfil} from './style'
import { LinearGradient } from 'expo-linear-gradient';

interface CircleStoryProps {
    NameOfPerfil: string;
    ImagepOfPerfil: string;
    Visible: boolean;
    Futurefunction?: any;
}

const Story_Circle = ({ NameOfPerfil, ImagepOfPerfil, Visible, Futurefunction }: CircleStoryProps) => {

    return (
        <>
        {Visible == true ?
        (
            <View>
            <LinearGradient colors={['#D34496', '#FAA258']} style={{
                width: 70,
                height:70,
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius: 50,
            }}  >
          
                <ImagePerfil  source={require('../../../assets/Images/StoryCircle/perfil.jpg')}></ImagePerfil>
            </LinearGradient>
            </View>
        )
        :
        (
            <TouchableOpacity>
          
                <ImagePerfil  source={require('../../../assets/Images/StoryCircle/perfil.jpg')}></ImagePerfil>
            
            </TouchableOpacity>
        )}
        </>
    );

}

var styles = StyleSheet.create({
    linearGradient: {
        width: '70px',
        height:'70px',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50,

    },
  
  });

export default Story_Circle;