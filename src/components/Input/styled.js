import { Text, TextInput, View } from "react-native";
import styled from "styled-components";

export const TextInputStyle = styled(TextInput)`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
`;

export const TextMirror = styled(Text)`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  font-style:italic;
  transform: rotate(180deg);
  transform: rotateX(180deg);
`;


