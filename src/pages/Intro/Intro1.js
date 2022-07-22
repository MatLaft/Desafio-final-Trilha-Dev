import React from "react";
import { View, StyleSheet,TouchableOpacity,FlatList,Text,Image, BackHandler } from "react-native";
import styles from './Style'
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
    {
      key: 1,
      title: 'Aprenda a qualquer hora e em qualquer lugar',
      text: 'Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!',
      image: require('./Images/1.png'),
    },
    {
      key: 2,
      title: 'Diversos assuntos para você',
      text: 'São vários quizes diferentes para você. Escolha um e se aventure!',
      image: require('./Images/2.png'),
    },
    {
      key: 3,
      title: 'Melhore suas habilidades',
      text: 'Memorize os conteúdos do aplicativo e melhore suas habilidades!',
      image: require('./Images/3.png'),
    }
  ];

  const renderItem = ({ item }) => {
    return (
      <View >
        <Image source={item.image} style={{width:293,height:206,alignSelf:'center'}} />
        <Text style={styles.textomaior}>{item.title}</Text>
        <Text style={styles.textomenor}>{item.text}</Text>
      </View>
    );
  }
  
  export default function Intro1({navigation}){
    const botao =()=>{ return(
        <View 
          style={styles.botao}
        >
              <Text style={styles.textobotao}>Avançar</Text>
        </View>
    )}
      

      return(
        <View style = {styles.container}>
            <Text style={styles.textoskip } onPress={()=>navigation.navigate('Login')} >Skip</Text>
            <View 
              style={{width:'100%',height:500,alignSelf:'center',marginTop:100,}}>
                <AppIntroSlider  
                  dotStyle={{backgroundColor: '#D5D4D4'}}
                  activeDotStyle={{backgroundColor: '#65AAEA', width: 16}} 
                  renderItem={renderItem} data={slides}
                  onDone={()=>navigation.navigate('Login')} 
                  renderDoneButton={botao}
                  bottomButton={styles.botao}
                  renderNextButton={botao}

              />
            </View>
        </View>
    )
} 