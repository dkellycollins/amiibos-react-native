import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import AmiibosScreen from './AmiibosScreen';
import AppHeader from './AppHeader';

const Drawer = createDrawerNavigator();
const linkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Figures: 'amiibos/figures',
      Cards: 'amiibos/cards',
    },
  },
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={linkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        initialRouteName="Figures"
        screenOptions={({ navigation }) => ({
          headerShown: true,
          header: () => <AppHeader navigation={navigation} />
        })}
      >
        <Drawer.Screen name="Figures">
          {(props) => <AmiibosScreen {...props} type="figure" />}
        </Drawer.Screen>
        <Drawer.Screen name="Cards">
          {(props) => <AmiibosScreen {...props} type="card" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
