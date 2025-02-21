import {
  NavigationContainer


} from "@react-navigation/native";
import Home from "../screens/AuthScreens/ReceitaScreen";
import { MainStacks } from "./MainStacks";


export default function Routes() {
  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
}
