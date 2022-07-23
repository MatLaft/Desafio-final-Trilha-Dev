import React,{useState,useEffect} from "react";
import { View,Text,TouchableOpacity,Pressable } from "react-native";
import styles from "./Style";
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function ({navigation,route}) {
    return(
        route.params.acertos!=route.params.Nquestoes?
            <View style={{backgroundColor:'#fff',alignItems:'center',width:'100%',height:'100%'}}>
                <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Detalhes',route.params.parametros)} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
                <Text style={styles.titulo}>Resulado</Text>
                <Text style={styles.resultado}>{route.params.acertos}/{route.params.Nquestoes}</Text>
                <Text style={styles.subtexto}>Quase lá...</Text>
                <Text style={styles.subsubtexto}>Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!</Text>
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Detalhes',route.params.parametros)} >
                    <Text style={styles.textoBotao} >Finalizar</Text>
                </TouchableOpacity>
            </View>
        :   
            <View style={{backgroundColor:'#fff',alignItems:'center',width:'100%',height:'100%'}}>
                <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Detalhes',route.params.parametros)} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
                <Text style={styles.titulo}>Resulado</Text>
                <Text style={styles.resultado}>{route.params.acertos}/{route.params.Nquestoes}</Text>
                <Text style={styles.subtexto}>Você é um mestre!</Text>
                <Text style={styles.subsubtexto}>Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!</Text>
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Detalhes',route.params.parametros)} >
                    <Text style={styles.textoBotao} >Finalizar</Text>
                </TouchableOpacity>
            </View>
    )
}