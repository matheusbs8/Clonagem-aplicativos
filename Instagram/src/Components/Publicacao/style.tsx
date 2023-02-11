import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";





export const Background = styled.View`
  height: ${hp('75%')};
  width:${wp('100%')};
  display: flex;
  background-color:#fff;
`;

export const ImagePubli = styled.Image`
  height: 70%;
  width: 100%;
  display: flex;
  background-color:#fff;
`;

export const TextPerfil = styled.Text`
  font-size:12px;
  font-family: Segoe;
  color: black;
  margin-left: 5;
  margin-right: 7;
`;
export const ImagePerfil = styled.Image`
width: 66px;
height:66px;
border-radius:50px;
border: 2px solid white;
margin-right:1px;
`;

export const Header = styled.View`
  height: 8%;
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
  height: 8%;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding: 0px 10px;
  border-bottom-color: rgba(0,0,0,.3);
    border-bottom-width: .07px;
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