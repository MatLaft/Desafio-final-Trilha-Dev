import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity,Image } from "react-native";

import styles from './Style'

export default function Recuperar({navigation}){
    const [email,setEmail] = useState(null)
    const [senha,setSenha] = useState(null)
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={()=>navigation.navigate('Login')} ><Image source={require('../../../assets/oltar.png')}></Image></TouchableOpacity>
            <Text style={styles.titulo}>Recuperar Senha</Text>
            <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder='E-mail'/>
            <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao}>Enviar E-mail</Text></TouchableOpacity>
        </View>
    )
}