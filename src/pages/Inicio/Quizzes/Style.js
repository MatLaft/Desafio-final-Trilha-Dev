import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
        height:'100%',
    },
    textomenor:{
        fontWeight:'400',
        fontSize:16,
        left:16,
        marginTop:20,
        color:'#3C3A36',
        height:26,

    },
    textomaior:{
        fontWeight:'700',
        fontSize:32,
        left:16,
        color:'#3C3A36'
    },
    input:{
        borderColor:'#BEBAB3',
        color:'#78746D'
    },
    inputpesquisa:{
        width: 287,
        borderRadius:12,
        backgroundColor: '#fff',
        height : 60,
        paddingLeft: 10,
        borderWidth:1,
        borderColor:'#BEBAB3',
        alignSelf:'center',
        position: 'absolute',
        left:72,
        top:60,
        justifyContent:'center',
    },
    inputpesquisainicio:{
        width: 343,
        margin:12,
        borderRadius:12,
        backgroundColor: '#fff',
        height : 60,
        paddingLeft: 10,
        borderWidth:1,
        borderColor:'#BEBAB3',
        alignSelf:'center',
        justifyContent:'center',
    },
    lista:{
        alignSelf:'center',
    },
    lista1:{
        alignSelf:'center',
        top:50
    },
    listabusca:{
        alignSelf:'center',
        top:125
    },
    listahorizontal:{
        left:16,
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
    itemhorizontal:{
        backgroundColor:'#65AAEA',
        margin:4,
        paddingHorizontal:11,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
        marginBottom:25
    },
    textolistahorizontal:{
        color:'#F2F2F2',
        fontSize:12,
        fontWeight:'500',

    },
    imagem:{
        height:194,
        overflow:'hidden',
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
    textoimagemcontainer2:{
        backgroundColor:'#65AAEA',
        paddingHorizontal:11,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:12,
        marginBottom:25,
        width:72,
        left:280,
        top:132,
        height:24
    },

    textoimagem:{
        color:'#F2F2F2',
        fontSize:14,
        fontWeight:'500',
    },
    voltar:{
        borderWidth:1,
        borderColor:'#BEBAB3',
        width: 48,
        height:48,
        justifyContent:'center',
        alignContent:'center',
        position: 'absolute',
        alignItems:'center',
        top:64,
        left:16,
        borderRadius:100
    },
    lupa:{
        position: 'absolute',
        right: 18,
    },
    resultado:{
        position:'absolute',
        top:10,
        left:16,
        fontWeight:'500',
        fontSize:24
    },
    textopesquisa:{
        fontWeight:'500',
        fontSize:24,
        color:'#3C3A36',
    },
    textopesquisa2:{
        fontWeight:'400',
        fontSize:14,
        color:'#78746D',
        textAlign:'center',
        marginTop:8
    },
    titulo:{
        top:64,
        alignSelf:'center',
        fontSize:24,
        fontWeight:'500',
        color:'#3C3A36',
        width:200,
        textAlign:'center'

    },
    imagemDetalhe:{
        height:200,
        width:'100%',
        top:108,
        alignSelf:'center',
        resizeMode:'contain',
        borderColor:'#3C3A36'
    },
    botao:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#82327E',
        borderRadius:12,
        height:60,
        width:'90%',
        top:270
    },
    botao2:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#82327E',
        position:'absolute',
        borderRadius:12,
        height:60,
        width:'90%',
        top:700
    },
    textoBotao:{
        fontSize:16,
        fontWeight:'500',
        color:'#FFF'
    },

})

export default style