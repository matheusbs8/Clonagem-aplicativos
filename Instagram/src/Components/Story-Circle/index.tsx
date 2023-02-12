import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {TextPerfil, ImagePerfil, BackButton, BackButtonS, TextPerfilS, ImagePerfilS} from './style'
import { LinearGradient } from 'expo-linear-gradient';

interface CircleStoryProps {
    NameOfPerfil: string;
    ImageOfPerfil: any;
    Visible: boolean;
    sizeBig?: boolean;
    Futurefunction?: any;
}

const Story_Circle = ({ NameOfPerfil, ImageOfPerfil, Visible, Futurefunction, sizeBig }: CircleStoryProps) => {

    return (
        <>
        {Visible == true ? sizeBig == true ?
        (
            <BackButton onPress={()=>{console.log(ImageOfPerfil)}}>
                
            {/* <LinearGradient colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', #bc1888]} */}
            <LinearGradient colors={['#D34496', '#FAA258']}
            start={[0, 0.5]}
            end={[1, 0.5]} style={{
                width: 70,
                height:70,
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius: 50,
                paddingLeft: 1.5,
            }}  >
          
                <ImagePerfil  source={ImageOfPerfil}></ImagePerfil>
            </LinearGradient>
            <TextPerfil>
                {NameOfPerfil}
            </TextPerfil>
            </BackButton>
        )
        :
        (
            <BackButtonS onPress={()=>{console.log(ImageOfPerfil)}}>
                
            {/* <LinearGradient colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', #bc1888]} */}
            <LinearGradient colors={['#D34496', '#FAA258']}
            start={[0, 0.5]}
            end={[1, 0.5]} style={{
                width: 41,
                height:41,
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius: 50,
                paddingLeft: .39,
            }}  >
          
                <ImagePerfilS  source={ImageOfPerfil}></ImagePerfilS>
            </LinearGradient>
            
            </BackButtonS>

        )
        : sizeBig == true ?
        (
            <BackButton>
                <ImagePerfil  source={ImageOfPerfil}></ImagePerfil>
                <TextPerfil>
                    Seu Story
                </TextPerfil>
            </BackButton>
        )
        :
        (
            <BackButtonS>
                <ImagePerfilS  source={ImageOfPerfil}></ImagePerfilS>
                <TextPerfilS>
                    Seu Story
                </TextPerfilS>
            </BackButtonS>
        )
        }
        </>
    );

}



export default Story_Circle;