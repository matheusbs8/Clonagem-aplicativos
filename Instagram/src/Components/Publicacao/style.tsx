import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";





export const Background = styled.View`
 
  width:${wp('100%')};
  display: flex;
  background-color:#fff;
`;

export const Shadow = styled.View`
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,.4);
  display: flex;
  align-items:center;
  justify-content:center;
`;

export const BackgroundImage = styled.TouchableOpacity`
  height: ${hp('50%')};
  min-height:450px ;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
`;


export const ImagemPublicacao = styled.ImageBackground`
height:${hp('40%')};
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;

`;

export const TextPerfil = styled.Text`
  font-size:12px;
  font-family: Segoe;
  color: black;
  margin-left: 5;
  margin-right: 7;
`;

export const Header = styled.View`
  height: ${hp('5%')};
  min-height:50px ;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: 0px 10px;
  border-bottom-color: rgba(0,0,0,.3);
    border-bottom-width: .07px;
`;
export const HeaderS = styled.View`
  height: ${hp('5%')};
  min-height:50px ;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: 0px 10px;

`;
export const BackImage = styled.View`
  width: 50%;
  height: 100%;
  display:flex ;
  flex-direction:row;
  justify-content: flex-start;
  align-items: center;
  background-color:#fff;
`
export const Verificado = styled.Image`
  width:15;
  height:15;
  margin-top:2;
  `

export const BackIcons = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    height: 100%;
    width: 40%;
    margin-left:-20px;
`  
export const Box = styled.View`
  
  width:100%;
  display: flex;

  padding:0px 10px 10px 10px;
`;

export const TextNegrito = styled.Text`
  font-size:12px;
  font-family: Segoe;
  color: black;
  font-weight:700;
`;
export const TextDesc = styled.Text`
  font-size:12px;
  font-family: Segoe;
  color: black;
`;