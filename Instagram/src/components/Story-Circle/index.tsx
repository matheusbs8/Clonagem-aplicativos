import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {TextPerfil, ImagePerfil, BackButton} from './style'
import { LinearGradient } from 'expo-linear-gradient';

interface CircleStoryProps {
    NameOfPerfil: string;
    ImageOfPerfil: string;
    Visible: boolean;
    Futurefunction?: any;
}

const Story_Circle = ({ NameOfPerfil, ImageOfPerfil, Visible, Futurefunction }: CircleStoryProps) => {
    const url="'"+ImageOfPerfil+"'";
    console.log(url);
    return (
        <>
        {Visible == true ?
        (
            <BackButton>
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
            <TextPerfil>
                {NameOfPerfil}
            </TextPerfil>
            </BackButton>
        )
        :
        (
            <BackButton>
                <ImagePerfil  source={require('../../../assets/Images/StoryCircle/perfil.jpg')}></ImagePerfil>
                <TextPerfil>
                    Seu Story
                </TextPerfil>
            </BackButton>
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