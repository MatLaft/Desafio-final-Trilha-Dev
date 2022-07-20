import React from "react";
import { View, StyleSheet,TouchableOpacity,FlatList,Text,Image } from "react-native";

import styles from './Style'

const imagens = [{id:1,img:require('./Images/1.png'),texto:'Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!'},
{id:2,img:require('./Images/2.png'),texto:'São vários quizes diferentes para você. Escolha um e se aventure!'},
{id:3,img:require('./Images/3.png'),texto:'Memorize os conteúdos do aplicativo e melhore suas habilidades!'}]

  
export default function Intro1({navigation}){
    return(
        <View style = {styles.container}>
        <Text style={styles.textoskip } onPress={()=>navigation.navigate('Login')} >Skip</Text>
        <Image source={require('./Images/1.png')} style={styles.item}/>
        <Text style = {styles.textomaior}>Aprenda a qualquer hora e em qualquer lugar</Text>
        <Text style = {styles.textomenor}>Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!</Text>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Intro2')}
        style={styles.botao}>
        <Text style={styles.textobotao}>Avançar</Text></TouchableOpacity>
        </View>
    )
} 