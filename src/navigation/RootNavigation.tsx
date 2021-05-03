import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import AppHeader from "./AppHeader";

const Drawer = createDrawerNavigator();

export const RootNavigationConfiguration = {
  screens: {
    Figures: 'amiibos/figures',
    Cards: 'amiibos/cards',
  }
};

export default function RootNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Figures" screenOptions={{ headerShown: true, header: AppHeader }}>
      <Drawer.Screen name="Figures" component={TabOneScreen} />
      <Drawer.Screen name="Cards" component={TabTwoScreen} />
    </Drawer.Navigator>
  );
}