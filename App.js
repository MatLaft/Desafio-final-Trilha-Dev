import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from  "react-native-splash-screen"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Index from './src/pages/Intro/Index'
import Login from './src/pages/Login/Login';

import Intro1 from './src/pages/Intro/Intro1';
import Intro2 from './src/pages/Intro/Intro2';
import Intro3 from './src/pages/Intro/Intro3';
import Cadastro from './src/pages/Login/Cadastro';
import Recuperar from './src/pages/Login/Recuperar';
import Quizzes from './src/pages/Inicio/Quizzes/Quizzes';
import Configs from './src/pages/Inicio/Configs/Configs';
import perfil from './src/pages/Inicio/Perfil/perfil';
import Historico from './src/pages/Inicio/Perfil/Historico';
import Sobre from './src/pages/Inicio/Perfil/Sobre';



const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()



function Tabs({route}){
  return(
    <Tab.Navigator>
      <Tab.Screen name = 'Quizzes' component = {Quizzes} options={{ headerShown: false}} initialParams={route.params} />
      <Tab.Screen name = 'Perfil' component = {perfil} options={{ headerShown: false}} initialParams={route.params} />
      <Tab.Screen name = 'Configs' component = {Configs} options={{ headerShown: false}} initialParams={route.params} />
    </Tab.Navigator>
  )
}


export default function App({navigation}) {
  return ( 
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name = 'Intro1' component = {Intro1}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Intro2' component = {Intro2}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Intro3' component = {Intro3}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Login' component = {Login}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Recuperar' component = {Recuperar}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'Cadastro' component = {Cadastro}  options={{ headerShown: false }}/>
        <Stack.Screen name = 'TelaInicial' component = {Tabs}  options={{ headerShown: false }} />
        <Stack.Screen name = 'Sobre o app' component = {Sobre}  options={{ headerShown: false }} />
        <Stack.Screen name = 'historico' component = {Historico}  options={{ headerShown: false }} />
      </Stack.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
});
