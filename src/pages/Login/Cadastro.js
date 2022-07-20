import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './Style'

export default function Cadastro({navigation}){
    const [nome,setNome] = useState(null)
    const [email,setEmail] = useState(null)
    const [senha,setSenha] = useState(null)
    const [hidePass, setHidePass] = useState(true)
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} onPress={()=>navigation.navigate('Login')} ><Image source={require('../../../assets/oltar.png')}></Image></TouchableOpacity>
            <Text style={styles.titulo}>Cadastre-se</Text>
            <Text style={styles.subtitulo}>Crie uma conta gratuitamente</Text>
            <TextInput onChangeText={setNome} value={nome} style={styles.input} placeholder='Nome'/>
            <TextInput onChangeText={setEmail} value={email} style={styles.input} placeholder='E-mail'/>
            <TextInput secureTextEntry={hidePass? true:false} onChangeText={setSenha} value={senha} style={styles.input} placeholder='Senha'/><Icon
          name={hidePass ? 'eye-slash' : 'eye'}
          size={15}
          color="grey"
          onPress={() => setHidePass(!hidePass)}
          style={{position:'absolute',top:449.5,right:40}}
        />
            <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao}>Cadastre-se</Text></TouchableOpacity>
            <TouchableOpacity ><Text style={styles.botaomenor}>Entrar</Text></TouchableOpacity>
        </View>
    )
}