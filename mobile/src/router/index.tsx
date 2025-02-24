import {
  NavigationContainer

} from "@react-navigation/native";

import { MainStacks } from "./MainStacks";


export default function Routes() {
  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
}
