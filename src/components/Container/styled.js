import { View } from "react-native";
import styled from "styled-components";

export const ContainerStyle = styled(View)`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  width: 90%;

  padding: ${(props) => props.padding};

  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
`;
