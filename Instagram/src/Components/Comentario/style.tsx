import styled from 'styled-components/native';


export const BackComent = styled.View`
  height: auto;
  width: 100%;
  padding:2px 0px ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const LeftSection = styled.View`
  height: 100%;
  width: 94%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

`;

export const RightSection = styled.View`
  height: 100%;
  width: 5%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

`;

export const ImagePerfil = styled.Image`
width: 66px;
height:66px;
border-radius:50px;
border: 2px solid white;
margin-right:1px;
`

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
