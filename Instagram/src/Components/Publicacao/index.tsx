import React from "react";
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {TextPerfil, ImagePerfil, Background, Header, BackImage, Verificado, ImagePubli, HeaderS, BackIcons} from './style'
import { LinearGradient } from 'expo-linear-gradient';
import Story_Circle from "../Story-Circle";
import Entypo from "react-native-vector-icons/Entypo";
import Stories from "../../Utils/Stories";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import  Feather  from "react-native-vector-icons/Feather";
interface PublicacaoProps {
    NameOfPerfil?: string;
    ImageOfPerfil?: any;
    Visible?: boolean;
    Futurefunction?: any;
}

const Publicacao = ({ NameOfPerfil, ImageOfPerfil, Visible, Futurefunction }: PublicacaoProps) => {
    const width = Dimensions.get('window').width;
    const sizeIcon = 22
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
            <Background>
                <Header>
                    <BackImage>
                        <Story_Circle NameOfPerfil={Stories[3].label} ImageOfPerfil={Stories[3].image} Visible={true} sizeBig={false}></Story_Circle>
                        
                        <TouchableOpacity><TextPerfil>{Stories[1].label}</TextPerfil></TouchableOpacity>
                        <Verificado source={require('../../../assets/imagens/verificado.jpg')}></Verificado>
                    </BackImage>
                    
                    <TouchableOpacity><Entypo name="dots-three-vertical" size={21}></Entypo></TouchableOpacity>
                </Header>
                <ImagePubli source={require('../../../assets/imagens/Publicacao/publi1.jpg')}></ImagePubli>
                <HeaderS>
                <BackIcons>
                    <TouchableOpacity>
                    <AntDesign name="hearto" size={sizeIcon}></AntDesign>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={sizeIcon}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <FontAwesome name="location-arrow" size={sizeIcon}></FontAwesome>
                    </TouchableOpacity>
                </BackIcons>
                <TouchableOpacity>
                <Feather name="bookmark" size={sizeIcon}></Feather>
                </TouchableOpacity>
                </HeaderS>
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
            </Background>
        )}
        </>
    );

}



export default Publicacao;