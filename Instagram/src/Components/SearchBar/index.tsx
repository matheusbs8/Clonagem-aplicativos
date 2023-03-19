import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import {BackInput, TextSearch, BackIcon, BackInputButton} from './style'
import { LinearGradient } from 'expo-linear-gradient';
import  IonIcon  from "@expo/vector-icons/Ionicons";

interface SearchBarProps {
    text: string;
    onchangeText: any;
    buttonT: boolean;
 
}

const SearchBar = ({ text, onchangeText, buttonT}: SearchBarProps) => {

    return (
        <>
        {buttonT==true ? (
        <BackInput>
            <BackIcon>
            <IonIcon name="search" color={'#B2B2B2'} size={25} />
            </BackIcon>
            <TextSearch
            style={{outline:'none'}}
            onChangeText={onchangeText}
            value={text}
            placeholder="Pesquisar"
            />
        </BackInput>
        ):(
        
        <BackInputButton>
            <BackIcon>
            <IonIcon name="search" color={'#B2B2B2'} size={25} />
            </BackIcon>
            <TextSearch
            style={{outline:'none'}}
            onChangeText={onchangeText}
            value={text}
            placeholder="Pesquisar"
            />
        </BackInputButton>)}
        </>
        
    );

}



export default SearchBar;