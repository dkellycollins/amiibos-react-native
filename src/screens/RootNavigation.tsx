import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import AmiibosScreen from './AmiibosScreen';
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
      <Drawer.Screen name="Figures" component={AmiibosScreen} />
      <Drawer.Screen name="Cards" component={AmiibosScreen} />
    </Drawer.Navigator>
  );
}