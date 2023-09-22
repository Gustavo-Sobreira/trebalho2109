import { useState } from "react";
import { TextInputStyle, TextMirror } from "./styled";
import { View } from "react-native";

export const InputData = ({ label, type }) => {
  const [mensagem, setMensagem] = useState();

  return (
    <View>
      <TextInputStyle
        color={"#fff"}
        fontsize={"25px"}
        placeholder={label || "Digite seu texto aqui:"}
        onChangeText={(text) => setMensagem(text)}
        keyboardType={type}
      ></TextInputStyle>
      <TextMirror color={"#fff"} fontsize={"25px"}>
        {mensagem}
      </TextMirror>
    </View>
  );
};
