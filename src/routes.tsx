import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
)

export default Routes;