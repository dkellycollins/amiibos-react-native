import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TabTwoParamList } from '../../types';

const TabTwoStack = createStackNavigator<TabTwoParamList>();

export default function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}