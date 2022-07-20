import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
        height:'100%',
        alignItems:'center'
    },
    item:{
        marginTop:47,
        height:'40%',
        width:'100%',
    },
    textomaior:{
        fontWeight:'500',
        fontSize:24,
        textAlign:'center',
        marginTop:40,
        color:'#3C3A36'
    },
    textomenor:{
        fontWeight:'400',
        fontSize:18,
        textAlign:'center',
        marginTop:20,
        color:'#3C3A36'
    },
    botao:{
        marginTop:40,
        backgroundColor:'#82327E',
        borderRadius:16,
        paddingTop:3,
        paddingBottom:3
    },
    botaoskip:{
        backgroundColor:'#000',
        marginTop:42,
        width:'15%',
        justifyContent:'center',
        textAlign:'center'
    },
    textobotao:{
        fontWeight:'500',
        fontSize:24,
        textAlign:'center',
        color:'#FFF',
        margin: 12,
        marginHorizontal:120
    },
    textoskip:{
        fontWeight:'500',
        fontSize:14,
        color:'#78746D',
        margin: 12,
        marginHorizontal:20,
        marginTop:58,
        marginLeft:320
    }
});

export default styles