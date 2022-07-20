import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable} from "react-native";
import styles from "./Style";



export default function ({route,navigation}){
    let listaquiz = route.params.listaquiz
    let perfil = route.params.perfil
    const [pesquisa,setPesquisa] = useState(null)

    
    const Item = ({ title }) => (
      <TouchableOpacity style={styles.itemhorizontal} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.textolistahorizontal}>#{title}</Text>
      </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
      <Item title={item.search} />
    );
    
    const ItemQuizz = ({ title }) => (
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
      const renderItemQuizz = ({ item }) => (
        <ItemQuizz title={item} />
      );
    

    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.textomenor}>Hello,</Text>
        <Text style={styles.textomaior}>{perfil.name}</Text>
        <TextInput onChangeText={setPesquisa} value={pesquisa} placeholder="Pesquisa quiz" style={styles.input}></TextInput>
        <FlatList
            horizontal={true}
            style={styles.listahorizontal}
            data={listaquiz}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
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