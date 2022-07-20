import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    voltar:{
        borderWidth:1,
        borderColor:'#BEBAB3',
        width: 40,
        height:40,
        justifyContent:'center',
        alignContent:'center',
        position: 'absolute',
        alignItems:'center',
        top:44,
        left:16,
        borderRadius:100
    },
    titulo:{
        fontWeight:'500',
        fontSize:24,
        top:10,
        color:'#3C3A36',
        alignSelf:'center',
    },
    containerImagem:{
        borderRadius:100,
        height:140,
        width:140,
        overflow:'hidden',
        marginTop:52,
        borderColor:'#65AAEA',
        borderWidth:4,
        marginBottom:17.01
    },
    container:{
        borderWidth:1,
        borderColor:'#BEBAB3',
        marginTop:16,
        borderRadius: 16,
        width: 343,
        height:80,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    texto:{
        fontWeight:'500',
        fontSize:24,
        color:'#3C3A36',
        alignSelf:'center',
    },
    imagem:{
        marginTop:158,
        height:128,
        width:128,
        alignSelf:'center'

    },
    sobretitulo:{
        fontWeight:'700',
        fontSize:40,
        marginTop:16,
        color:'#3C3A36',
        alignSelf:'center'}
        
})

export default styles