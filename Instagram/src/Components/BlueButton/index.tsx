import React from "react";
import {Button,Text} from './styles';


interface BlueButtonProps {
    onPress?: (event: any) => void;
    text: string;
  }

const BlueButton = ({onPress, text}:BlueButtonProps) => {
    return (
      <Button onPress={onPress}>
        <Text>
        {text}
        </Text>
      </Button>
    )
  }
export default BlueButton;  