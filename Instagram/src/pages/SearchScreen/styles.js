import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Background = styled.View`
    background-color: #fff ;
    height: 100% ;
    width: 100% ;

`

export const BackSearch = styled.View`
   
    height: 8% ;
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
   

`
export const ImageMeta = styled.Image`
  width: 100;
  height: 30;

  `
export const BackIcons = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    height: 100%;
    width: 40%;

`
export const TextFrom = styled.Text`
    font-size: 14px;
    color:#777;
`



export const ImageIcon = styled.Image`
  width: 64px;
  height: 64px;
  margin-top:20%;`

export const BackImage = styled.View`
  width: 50%;
  height: 100%;
  display:flex ;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;

`
export const HorizontalScroll = styled.ScrollView`
  max-height:100px;
  padding-bottom:10px;
  border-bottom-color: rgba(0,0,0,.3);
    border-bottom-width: .07px;
`;