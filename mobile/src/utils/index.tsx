import { type NavigationProp } from "@react-navigation/native";
import { ERoutes } from "../router/MainStacks/index";

export const NavigationRoot = (
  navigate: Omit<NavigationProp<ReactNavigation.RootParamList>, "getState">,
  route: ERoutes,
  params?: Record<string, any>
) => {
  navigate.navigate(...[route, params] as never)
}