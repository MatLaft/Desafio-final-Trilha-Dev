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
        alignSelf:'center'
    },
    lista:{
        alignSelf:'center',
    },
    item:{
        borderWidth:1,
        borderColor:'#BEBAB3',
        margin:8,
        borderRadius: 18,
        width: 343,
        height:275,
        flex:1,
        overflow:'hidden',
    },
    imagems:{
        height:194,
        overflow:'hidden',
    },
    textoimagemcontainer:{
        backgroundColor:'#65AAEA',
        paddingHorizontal:11,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:12,
        marginBottom:25,
        width:72,
        left:255,
        top:162,
        height:24
    },
    textoimagem:{
        color:'#F2F2F2',
        fontSize:14,
        fontWeight:'500',
    },
    title:{
        fontWeight:'500',
        fontSize:24,
        left:16,
        color:'#3C3A36',
        marginTop:16,
    },
    subtitle:{
        fontWeight:'400',
        fontSize:14,
        left:16,
        color:'#3C3A36',
        marginTop:4,
    }
        
})

export default styles