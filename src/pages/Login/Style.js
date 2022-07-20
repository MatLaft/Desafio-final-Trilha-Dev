
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    titulo:{
        fontSize:24,
        fontWeight:'500',
        color:'#3C3A36',
        marginBottom:10
    },
    subtitulo:{
        fontSize:14,
        fontWeight:'500',
        color:'#78746D'
    },
    input:{
        width: '90%',
        borderRadius:12,
        backgroundColor: '#f6f6f6',
        height : 60,
        margin:5,
        paddingLeft: 10,
        borderWidth:1,
        borderColor:'#BEBAB3',
        
    },
    botaomenor:{
        fontSize:14,
        fontWeight:'500',
        color:'#78746D',
        margin: 10,
    },
    botao:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#82327E',
        borderRadius:12,
        height:60,
        width:'90%'
    },
    textoBotao:{
        fontSize:16,
        fontWeight:'500',
        color:'#FFF'
    },
    voltar:{
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#BEBAB3',
        borderRadius:100,
        padding:10,
        position:'absolute',
        top:60,
        left:15
        
    }

})

export default styles