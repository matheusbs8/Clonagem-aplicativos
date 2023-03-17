import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {TextNegrito, TextDesc, ImagePerfil, BackComent, LeftSection, RightSection} from './style'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from "@expo/vector-icons";
interface ComentProps {
    NameOfPerfil: string;
    ImageOfPerfil: any;
    sizeBig?: boolean;
    TextComent?: string;
}

const Comentario = ({ NameOfPerfil, ImageOfPerfil, TextComent, sizeBig }: ComentProps) => {
    const [favorite, setFavorite] = useState(false);
    const sizeIcon= 10
    return (
        <>
        {sizeBig == true ?
        (
            <BackComent>
                <LeftSection><TextDesc><TextNegrito>{NameOfPerfil}  </TextNegrito>{TextComent}</TextDesc></LeftSection>
                <RightSection>

                {!favorite?(
                        <>
                        <TouchableOpacity onPress={()=>{setFavorite(!favorite); }}>
                        <AntDesign name="hearto" size={sizeIcon}></AntDesign>
                        </TouchableOpacity>
                        </>
                    ):
                    (
                        <>
                        <TouchableOpacity onPress={()=>{setFavorite(!favorite); }}>
                        <AntDesign name="heart" color='red' size={sizeIcon}></AntDesign>
                        </TouchableOpacity>
                        </>
                    )
                    
                    }


                </RightSection>
               
            </BackComent>
        )
        :
        (
            <></>

        )
        }
        </>
    );

}



export default Comentario;