import React from "react";
import { View,Text,SafeAreaView,Pressable} from "react-native";
import styles from "./Style";
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function ({route,navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Quizzes')} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
            <Text style={styles.titulo}>Configurações</Text>
            <Text style={styles.subtitulo}>Informações da conta</Text>
            <View style={styles.containerOpcao}>
                <Icon name='angle-right' size={15} style={{color:'#BEBAB3',position:'absolute',left:311}}></Icon>
                <View style={styles.circulo}>
                <Icon name='user-alt' size={15} style={{color:'#fff'}}></Icon>
                </View>
            <Text style={styles.texto}>Nome</Text>
            <Text style={styles.subtexto}>{route.params.perfil.name}</Text>
            </View>
            <View style={styles.containerOpcao} >
                <Icon name='angle-right' size={15} style={{color:'#BEBAB3',position:'absolute',left:311}}></Icon>
                <View style={styles.circulo}>
                <Icon name='user-alt' size={15} style={{color:'#fff'}}></Icon>
                </View>
            <Text style={styles.textofoto}>Foto de perfil</Text>
            </View>
            <View style={styles.containerOpcao}>
                <Icon name='angle-right' size={15} style={{color:'#BEBAB3',position:'absolute',left:311}}></Icon>
                <View style={styles.circulo}>
                <Icon name='envelope' size={15} style={{color:'#fff'}}></Icon>
                </View>
            <Text style={styles.texto}>Email</Text>
            <Text style={styles.subtexto}>{route.params.perfil.email}</Text>
            </View>
            <View style={styles.containerOpcao}>
                <Icon name='angle-right' size={15} style={{color:'#BEBAB3',position:'absolute',left:311}}></Icon>
                <View style={styles.circulo}>
                <Icon name='lock' size={15} style={{color:'#fff'}}></Icon>
                </View>
            <Text style={styles.texto}>Senha</Text>
            <Text style={styles.subtexto}>Nunca foi alterada</Text>
            </View>
            
        </SafeAreaView>
)}
