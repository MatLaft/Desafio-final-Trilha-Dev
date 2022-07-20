import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable,Image} from "react-native";
import styles from "../Configs/Style";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function ({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Perfil')} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
        <Text style={styles.titulo}>Sobre o app</Text>
        <Image source={require('../../../../assets/illustration.png')} style={styles.imagem}></Image>
        <Text style={styles.sobretitulo}>PixelQuizzes</Text>
        <Text style={styles.textosobre}>O PixelQuizzes é um aplicativo criado para facilitar o aprendizado de conteúdos que nem sempre são os melhores de se aprender. Através da nossa plataforma, prometemos facilitar a sua aprendizagem em conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos uma metodologia inovadora para aprendizagem!</Text>
        </SafeAreaView>
    )
}