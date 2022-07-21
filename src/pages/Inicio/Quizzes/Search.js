import React,{useState,useEffect} from "react";
import { View,Text, TextInput,Pressable, Image,SafeAreaView,FlatList,ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import styles from "./Style";

async function getUser(busca) {
    try {
      const historico = await (await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?search=${busca.toLowerCase()}`)).data;
      return historico;
    } catch (error) {
      console.error(error);
    }
  }

const ItemQuizz = ({ title,navigation}) => (
    
    <Pressable style={styles.item} onPress={()=>navigation.navigate('Login')}>
      <ImageBackground source={{uri:title.banner_image}} style={styles.imagem}>
      <View style={styles.textoimagemcontainer}>
      <Text style={styles.textoimagem}>{title.difficulty}</Text>
      </View>
      </ImageBackground>
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.subtitle}>{title.short_description}</Text>
    </Pressable>
  );
  const renderItemQuizz = ({ item,navigation }) => (
    <ItemQuizz title={item} navigation={navigation} />
  );

export default function ({route,navigation}){
    const [pesquisa,setPesquisa] = useState('')
    const [listaquiz,setlistaquiz] = useState([])
    const getData = async () => {
        const lista = await getUser(pesquisa)
        setlistaquiz(lista)
    }
    
    useEffect(()=>{
        getData()
    },[pesquisa])
    
    return(


    <SafeAreaView style={styles.container}>
        <View style={styles.inputpesquisa}>
            <TextInput onChangeText={setPesquisa} value={pesquisa} placeholder="Digite sua pesquisa aqui..." style={styles.input}></TextInput>
            <Icon name='search' size={20} style={styles.lupa}></Icon>
        </View>
        <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Quizzes')} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
        {typeof(listaquiz)!='undefined' && pesquisa.length!=0?
            listaquiz.length>0?
                <View style={{top:80}}>
                    <Text style={styles.resultado}>{listaquiz.length} Results</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={styles.lista1}
                        data={listaquiz}
                        renderItem={({item})=>renderItemQuizz({item,navigation})}
                        keyExtractor={item => item.id}
                        />
                </View>:
            <View style={{justifyContent:'center',alignItems:'center',height:'80%',top:50}}>
                <Image source={require('../../../../assets/CoolKidsStanding.png')} style={{width:300,height:300}}></Image>
                <Text style={styles.textopesquisa}>Quiz não encontrado</Text>
                <Text style={styles.textopesquisa2}>Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</Text>
            </View>:

        <View style={{justifyContent:'center',alignItems:'center',height:'80%',top:80}}>
            <Text style={styles.textopesquisa}>Comece a pesquisar...</Text>
            <Text style={styles.textopesquisa2}>Digite um termo de busca para pesquisar todos os quizzes disponíveis no aplicativo!</Text>
        </View>}
    </SafeAreaView>
    )
}