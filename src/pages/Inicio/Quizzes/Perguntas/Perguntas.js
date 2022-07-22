import React,{useState,useEffect} from "react";
import { View,Text, TextInput,Pressable, Image,SafeAreaView,FlatList,ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "./Style";




  const  Botao =  ({texto,validador}) =>{
    return(
        <Pressable style={{backgroundColor:'#0f0',height:100,margin:10}}>
            <Text>{texto[0].answers[validador-1]}</Text>
        </Pressable>
    
)}



export default function ({route,navigation}){
    const arrayPerguntas = route.params
    
    return(
        <View>
            <Botao texto={arrayPerguntas} validador={1}/>
            <Botao texto={arrayPerguntas} validador={2}/>
            <Botao texto={arrayPerguntas} validador={3}/>

        </View>



)}
