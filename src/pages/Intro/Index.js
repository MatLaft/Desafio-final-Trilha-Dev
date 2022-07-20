import React  from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';

const Stack = createStackNavigator()

export default function Index() {
  return (
      <Stack.Navigator>
        <Stack.Screen name = 'Intro1' component = {Intro1}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Intro2' component = {Intro2}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Intro3' component = {Intro3}  options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}
