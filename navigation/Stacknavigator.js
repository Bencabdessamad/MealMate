import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

const Stacknavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Menu' component={MenuScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Stacknavigator

const styles = StyleSheet.create({})