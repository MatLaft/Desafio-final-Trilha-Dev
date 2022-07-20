import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, Image,SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "./Style";



export default function ({route}){
    let listaquiz = route.params.listaquiz
    let perfil = route.params.perfil
    const [pesquisa,setPesquisa] = useState(null)
    
    
    
    return(


    <SafeAreaView style={styles.container}>
        <Text style={styles.textomenor}>Hello,</Text>
        <Text style={styles.textomaior}>{perfil.name}</Text>
        <TextInput onChangeText={setPesquisa} value={pesquisa} placeholder="Pesquisa quiz" style={styles.input}></TextInput>
    </SafeAreaView>
    )
}