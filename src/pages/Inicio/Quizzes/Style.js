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
        width: '90%',
        borderRadius:12,
        backgroundColor: '#fff',
        height : 60,
        margin:12,
        paddingLeft: 10,
        borderWidth:1,
        borderColor:'#BEBAB3',
        alignSelf:'center'
    },
    lista:{
        alignSelf:'center',
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
    textoimagem:{
        color:'#F2F2F2',
        fontSize:14,
        fontWeight:'500',
    }
})

export default style