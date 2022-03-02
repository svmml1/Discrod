
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList  } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignUpScreen from '../screens/SignUpScreen';
import { useAuthContext } from '../contexts/AuthContext';
import DrawerNavigator from './DrawerNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const {userId} = useAuthContext();

  return (
    <Stack.Navigator>
      {!userId ? (
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      ) 
      : 
      <>
      <Stack.Screen name="Root" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </>
      }  
    </Stack.Navigator>
  );
}