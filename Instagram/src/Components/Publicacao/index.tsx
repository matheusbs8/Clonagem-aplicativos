import React from "react";
import { useState, useRef } from "react";
import { Dimensions, Text, View, ImageBackground, StyleSheet, Animated } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {TextPerfil, Box, Background, Header, BackImage, Verificado, BackgroundImage, HeaderS, BackIcons,
TextNegrito, TextDesc, Shadow} from './style';
import Story_Circle from "../Story-Circle";
import Entypo from "react-native-vector-icons/Entypo";
import Stories from "../../Utils/Stories";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import  Feather  from "react-native-vector-icons/Feather";
import ReadMore from 'react-native-read-more-text';



interface PublicacaoProps {
    NameOfPerfil?: string;
    ImageOfPerfil?: any;
    Visible?: boolean;
    Futurefunction?: any;
    verificado?:boolean;
    descricao?:string;
    Ncurtidas?:number;
    comentarios?:any;
    ImagePublicacao?:any;
}

const Publicacao = ({ NameOfPerfil, ImageOfPerfil, Visible, Futurefunction, verificado, descricao, Ncurtidas, comentarios, ImagePublicacao }: PublicacaoProps) => {
    const [favorite, setFavorite] = useState(false);
    const [saved, setSaved] = useState(false);
    const [curtidas, setCurtidas] = useState(Ncurtidas)
    const [Arraycomentarios, setArrayComentarios] = useState(comentarios)
    const [count, setCount]= useState(0)
    const [visible, setVisible]= useState(false)
    const width = Dimensions.get('window').width;
    const sizeIcon = 22
 // animação do coração aparecendo
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      };    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      };
    const MakeLiked = () => {
        setCount(count+1);
        if(!favorite){
            if(count == 1){
                fadeIn()
                setCount(0);
                
                setTimeout(() => {
                    fadeOut()
                    setFavorite(!favorite); 
                setCurtidas(curtidas+1)
                  }, 1500);
            }
        }
        else{
            if(count == 1){
                fadeIn();
                setCount(0);
                setTimeout(() => {
                    fadeOut()
                    setFavorite(!favorite); 
                setCurtidas(curtidas-1)
                  }, 1500);
            }
        }
      };

    return (
        <>
        {Visible == true ?
        (
            <Background>
                <Header>
                    <Text>a</Text>
                </Header>
            </Background>
        )
        :
        (
            <>
                <Header>
                    <BackImage>
                        <Story_Circle NameOfPerfil={NameOfPerfil} ImageOfPerfil={ImageOfPerfil} Visible={true} sizeBig={false}></Story_Circle>
                        
                        <TouchableOpacity><TextPerfil>{NameOfPerfil}</TextPerfil></TouchableOpacity>
                        {verificado?
                            <Verificado source={require('../../../assets/imagens/verificado.jpg')}></Verificado>
                            :
                            <></>
                        }
                        
                    </BackImage>
                    
                    <TouchableOpacity><Entypo name="dots-three-vertical" size={21}></Entypo></TouchableOpacity>
                </Header>
                
                <BackgroundImage onPress={()=>{MakeLiked()}}>
                    <ImageBackground source={ImagePublicacao}   style={styles.image}>
                            <Animated.View style={[ styles.full,{opacity: fadeAnim,},]}>
                                <AntDesign name="heart" color='white' size={3*sizeIcon}></AntDesign>
                            </Animated.View>       
                    </ImageBackground>
                </BackgroundImage>
                
                <HeaderS>
                <BackIcons>
                   {!favorite?(
                        <>
                        <TouchableOpacity onPress={()=>{setFavorite(!favorite); setCurtidas(curtidas+1)}}>
                        <AntDesign name="hearto" size={sizeIcon}></AntDesign>
                        </TouchableOpacity>
                        </>
                    ):
                    (
                        <>
                        <TouchableOpacity onPress={()=>{setFavorite(!favorite); if(favorite)setCurtidas(curtidas-1)}}>
                        <AntDesign name="heart" color='red' size={sizeIcon}></AntDesign>
                        </TouchableOpacity>
                        </>
                    )
                    
                    }
                    <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={sizeIcon}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <FontAwesome name="location-arrow" size={sizeIcon}></FontAwesome>
                    </TouchableOpacity>
                </BackIcons>

                {!saved?(
                        <TouchableOpacity onPress={()=>{setSaved(!saved)}}>
                        <FontAwesome name="bookmark-o" size={sizeIcon}></FontAwesome>
                        </TouchableOpacity> 
                    ):
                    (
                        <TouchableOpacity onPress={()=>{setSaved(!saved)}}>
                        <FontAwesome name="bookmark" size={sizeIcon}></FontAwesome>
                        </TouchableOpacity>
                    )    
                }
                </HeaderS>

                <Box>
                    <TouchableOpacity>
                    <TextNegrito>{curtidas} curtidas</TextNegrito>
                    </TouchableOpacity>
                    
                    <ReadMore
                        numberOfLines={3}
                        renderTruncatedFooter={(handlePress) => {
                            return (
                              <Text style={{color: '#ababab', marginTop: 5, fontSize:12}} onPress={handlePress}>
                                mais
                              </Text>
                            );}}
                        renderRevealedFooter={(handlePress) => {
                            return (
                              <Text style={{color: '#ababab', marginTop: 5, fontSize:12}} onPress={handlePress}>
                                menos
                              </Text>
                            );
                          }}
                        onReady={() => {
                            <Text style={{color: '#ababab', marginTop: 5, fontSize:12}} >
                                ... mais
                              </Text>
                          }}>
                            
                        <TextDesc><TextNegrito>{NameOfPerfil}</TextNegrito> {descricao}</TextDesc>
                    </ReadMore>
                    

                    {Arraycomentarios?.length>0?
                        (<TouchableOpacity><Text>Ver todos os {Arraycomentarios.length} comentários</Text></TouchableOpacity>)
                        :
                        <></>
                    }

                   {/* <> <TouchableOpacity>Ver tradução</TouchableOpacity> • 7 h</> */}
                </Box>
                {/* <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View> */}
            </>
        )}
        </>
    );


    

}

const styles = StyleSheet.create({
  
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems:'center',
      width:'100%',
    },
    full: {
        height:'100%',
        width:'100%',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',  
    },

  });

export default Publicacao;