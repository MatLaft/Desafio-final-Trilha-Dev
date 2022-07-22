import React,{useState} from "react";
import { View,Text, TextInput,TouchableOpacity, ImageBackground,SafeAreaView ,FlatList,Pressable} from "react-native";
import styles from "./Style";
import Icon from 'react-native-vector-icons/FontAwesome5'


const Item = ({title}) => (
  <TouchableOpacity style={styles.itemhorizontal} onPress={()=>navigation.navigate('Login')}>
    <Text style={styles.textolistahorizontal}>#{title}</Text>
  </TouchableOpacity>
);
const renderItem = ({ item }) => (
  <Item title={item.search} />
);

const ItemQuizz = ({ title,navigation}) => (
    
    <Pressable style={styles.item} onPress={()=>navigation.navigate('Detalhes',title)}>
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
    let listaquiz = route.params.listaquiz
    let perfil = route.params.perfil
    const [pesquisa,setPesquisa] = useState(null)
    
    

    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.textomenor}>Hello,</Text>
        <Text style={styles.textomaior}>{perfil.name}</Text>
        <Pressable style={styles.inputpesquisainicio} onPress={()=>navigation.navigate('Search')}>
            <Text  style={styles.input}>Pesquisa quiz</Text>
            <Icon name='search' size={20} style={styles.lupa}></Icon>
        </Pressable>
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
            renderItem={({item})=>renderItemQuizz({item,navigation})}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
    )
}