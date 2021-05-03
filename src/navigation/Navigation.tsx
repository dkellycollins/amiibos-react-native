import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import AppHeader from './AppHeader';
import RootNavigation, { RootNavigationConfiguration } from './RootNavigation';

const Stack = createStackNavigator();
const linkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: RootNavigationConfiguration,
      NotFound: '*'
    },
  },
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={linkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Figures" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={RootNavigation} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: true, header: AppHeader }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
