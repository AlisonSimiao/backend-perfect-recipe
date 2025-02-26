import {
  NavigationContainer

} from "@react-navigation/native";

import { MainStacks } from "./mainStacks";


export default function Routes() {
  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
}
