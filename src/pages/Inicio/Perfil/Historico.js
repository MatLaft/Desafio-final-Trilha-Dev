import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable,Image} from "react-native";
import styles from "../Configs/Style";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function ({route,navigation}){
    const listaquiz = route.params.listaquiz
    console.log(listaquiz)
    
    const ItemQuizz = ({ title }) => (
        <Pressable style={styles.item} onPress={()=>navigation.navigate('Login')}>
          <ImageBackground source={{uri:title.banner_image}} style={styles.imagems}>
          <View style={styles.textoimagemcontainer}>
          <Text style={styles.textoimagem}>{title.difficulty}</Text>
          </View>
          </ImageBackground>
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
            data={listaquiz}
            renderItem={renderItemQuizz}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
    )
}