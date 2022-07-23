import React,{useState,useEffect} from "react";
import { View,Text, TextInput,Pressable, Image,SafeAreaView,FlatList,ImageBackground,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "./Style";


export default function ({route,navigation}){
    const arrayPerguntas = route.params[0]
    const [counter,setCounter] = useState(0)
    const [apertavel,setApertavel]= useState(false)
    const [selecionada,setSelecionada] = useState(null)
    const [acertos,setAcertos] = useState(0)
    
    
    const  Botao =  ({texto,alternativa,numero}) =>{
        const apertarBotao = (numero) =>{
            setApertavel(true)
            setSelecionada(numero)
            arrayPerguntas[counter].correct_answer_index === numero?
                setAcertos(acertos+1)
            :{}
        }
        return(
        !selecionada?
            <TouchableOpacity style={styles.boxPergunta} onPress={()=>apertarBotao(alternativa)} disabled={apertavel} >
                <Text>{texto[numero].answers[alternativa-1]}</Text>
            </TouchableOpacity>
        :   
            alternativa == selecionada?
                (arrayPerguntas[counter].correct_answer_index === alternativa )?
                    <TouchableOpacity style={styles.boxPerguntaAcertada}  >
                        <Text>{texto[numero].answers[alternativa-1]}</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={styles.boxPerguntaErrada} >
                            <Text>{texto[numero].answers[alternativa-1]}</Text>
                    </TouchableOpacity>
            :
                <TouchableOpacity style={styles.boxPerguntaNaoSelicionada} >
                    <Text>{texto[numero].answers[alternativa-1]}</Text>
                </TouchableOpacity>
      
    )}
    const Botaofazertentativa = () =>{
        return(
            selecionada?
            <TouchableOpacity style={styles.botao} onPress={()=>counter<arrayPerguntas.length-1? proximoQuiz():navigation.navigate('Resultado',{acertos:acertos,parametros:route.params[1],Nquestoes:arrayPerguntas.length})} >
                <Text style={styles.textoBotao} >Continuar</Text>
            </TouchableOpacity>:<View></View>
        )
    }

    const proximoQuiz = () =>{
        setCounter(counter+1)
        setApertavel(false)
        setSelecionada(null)
    }
    
    return(
        <View style={{backgroundColor:'#fff',alignItems:'center',width:'100%',height:'100%'}}>
            <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Detalhes',route.params[1])} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
            <Text style={styles.questaoAtual}>{counter+1} de {arrayPerguntas.length}</Text>
            <Text style={styles.pergunta}>{arrayPerguntas[counter].question_text}</Text>
            <Image source={{uri:arrayPerguntas[counter].banner_image}} style={styles.imagem}></Image>
            <Botao texto={arrayPerguntas} alternativa={1} numero={counter} />
            <Botao texto={arrayPerguntas} alternativa={2} numero={counter} />
            <Botao texto={arrayPerguntas} alternativa={3} numero={counter} />
            <Botaofazertentativa></Botaofazertentativa>

        </View>



)}
