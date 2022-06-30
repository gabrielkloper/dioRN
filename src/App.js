import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, Pressable, TouchableWithoutFeedbackBase, Linking} from 'react-native';

const colorGitHub = '#010409'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/84879239?v=4'
const urlToMyGithub = 'https://github.com/gabrielkloper'

const App = () =>{
    
    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            Linking.openURL(urlToMyGithub);
        }
    }
    
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
    <View >
       <Image accessibilityLabel='foto de Gabriel' style={style.avatar} source={{uri: imageProfileGithub}} />
        <Text accessibilityLabel='nome Gabriel' style={style.text}>Gabriel Kloper</Text>
        <Text accessibilityLabel='nickname @gabklpr' style={style.nickname}>@gabklpr</Text>
        <Text accessibilityLabel='profissão advogado' style={style.nickname}>Advogado</Text>
        <Text accessibilityLabel='pós graduação Lei Geral de Proteção de Dados' style={style.nickname}>LGPD</Text>
        <Text accessibilityLabel='Desenvolvedor Front-End' style={style.nickname}>Dev. Front-End</Text>

        <Pressable onPress={handlePressGoToGithub}>
            <Text style={style.textButton}> Open in Github</Text>
        </Pressable>
    </View>
    </SafeAreaView>
    );

};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1, //Expandir para a tela inteira
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        

    },
    text:{
        fontSize:30,
        fontWeight: 'bold',
        color:'white',
        padding:20,
        alignItems:'center',
    },
    nickname:{
        fontSize:18,
        color:'white',
        alignSelf:'center',
    },
    avatar:{ 
        height:200,
        width:200,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2,
    },
    button:{
        backgroundColor:'black',
        borderRadius:10,
        padding:20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize:16,
        color:'white',

    }

});