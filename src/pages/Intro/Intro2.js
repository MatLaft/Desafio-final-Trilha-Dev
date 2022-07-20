import React from "react";
import { View, StyleSheet,TouchableOpacity,FlatList,Text,Image } from "react-native";

import styles from './Style'

const imagens = [{id:1,img:require('./Images/1.png'),texto:'Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!'},
{id:2,img:require('./Images/2.png'),texto:'São vários quizes diferentes para você. Escolha um e se aventure!'},
{id:3,img:require('./Images/3.png'),texto:'Memorize os conteúdos do aplicativo e melhore suas habilidades!'}]

  
export default function Intro2({navigation}){
    return(
        <View style = {styles.container}>
        <Text style={styles.textoskip} onPress={()=>navigation.navigate('Login')}>Skip</Text>
        <Image source={require('./Images/2.png')} style={styles.item}/>
        <Text style = {styles.textomaior}>Diversos assuntos para você</Text>
        <Text style = {styles.textomenor}>São vários quizes diferentes para você. Escolha um e se aventure!</Text>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Intro3')}
        style={styles.botao}>
        <Text style={styles.textobotao}>Avançar</Text></TouchableOpacity>
        </View>
    )
} 