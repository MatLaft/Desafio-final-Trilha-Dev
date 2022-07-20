import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable,Image} from "react-native";
import styles from "../Configs/Style";
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

async function getUser() {
  try {
    const historico = await (await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=true')).data;
    return historico;
  } catch (error) {
    console.error(error);
  }
}




export default function ({route,navigation}){
   const [historico,setHistorico] = useState(null)
   
   React.useEffect(() => {
    const getData = async () => {
      const data = await getUser()
      setHistorico(data);
    }

    getData()
 }, [])
    
    const ItemQuizz = ({ title }) => (
        <Pressable style={styles.item}>
          <ImageBackground source={{uri:title.banner_image}} style={styles.imagems}>
          <View style={styles.textoimagemcontainer}>
          <Text style={styles.textoimagem}>{title.difficulty}</Text>
          </View>
          </ImageBackground>
          <Text style={styles.acertadas}>Você acertou {title.correct_answers_count} de {title.questions_count}</Text>
          <Text style={styles.data}>Em {title.answered_date.replace("-", "/").replace("-", "/").slice(0,11)}</Text>
          <Text style={styles.title}>{title.title}</Text>
          <Text style={styles.subtitle}>{title.short_description}</Text>
        </Pressable>
      );
      const renderItemQuizz = ({ item }) => (
        <ItemQuizz title={item} />
      );
    return(
        <SafeAreaView style={styles.container}>
        <Pressable style={styles.voltar} onPress={()=>navigation.navigate('Perfil')} ><Icon name='angle-left' size={19} style={{color:'#3C3A36'}}></Icon></Pressable>
        <Text style={styles.titulo}>Seu histórico</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.lista}
            data={historico}
            renderItem={renderItemQuizz}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
    )
}