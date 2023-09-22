import { Container } from "../../components/Container";
import { WeIcons } from "../../components/Icons";
import { InputData } from "../../components/Input";
import { ScreenLayout } from "../style";

export function HomeScreen() {

  return (
    <ScreenLayout>
      <Container>
      <WeIcons name="right" size={20} color="#fff" />
        <InputData type="default"/>
        <WeIcons name="left" size={20} color="#fff" />
      </Container>
    </ScreenLayout>
  );
}

