import React from "react";
import { View,Text, TextInput,TouchableOpacity,SafeAreaView,Pressable,Image} from "react-native";
import styles from "./Style";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

async function getUser(busca) {
    try {
      const historico = await (await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/${busca}`)).data;
      return historico.data;
    } catch (error) {
      console.error(error);
    }
  }



export default function ({route,navigation}){
    const quiz = route.params
    async function mudarTela(){
        let x = await getUser(quiz.id)
        navigation.navigate('Perguntas',[x,quiz])
  
    } 

    return(
        <View  style={{backgroundColor:'#fff',height:'100%',width:'100%',overflow:'contain',}}>
            <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Quizzes')} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
            <Text  style={styles.titulo}>{quiz.title}</Text>
            <Image source={{uri:quiz.banner_image}} style={styles.imagemDetalhe}></Image>
            <View style={styles.textoimagemcontainer2}>
                <Text style={styles.textoimagem}>{quiz.difficulty}</Text>
            </View>
            <Text style={{
                top:200,
                left:16,
                fontSize:24,
                fontWeight:'500',
                color:'#3C3A36',
            }}
            >Sobre o quiz</Text>
            <Text
            style={{
                marginTop:4,
                top:200,
                left:16,
                fontSize:14,
                fontWeight:'400',
                color:'#3C3A36',
            }}
            >{quiz.description}</Text>
            <Text
                style={{
                    marginTop:24,
                top:200,
                left:16,
                fontSize:24,
                fontWeight:'500',
                color:'#3C3A36',
            }}
            >Quantidade de perguntas</Text>
            <Text
                style={{
                    marginTop:4,
                    top:200,
                    left:16,
                    fontSize:14,
                    fontWeight:'400',
                    color:'#3C3A36',
                }}
            >{quiz.questions_count}</Text>
            <TouchableOpacity style={styles.botao2}  onPress={()=>mudarTela()}><Text style={styles.textoBotao}>Fazer Tentativa</Text></TouchableOpacity>
        </View>
    )
}