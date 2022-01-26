import React, { useContext } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Contexto} from './Context';
import config from '../config/config.json';

export default function Sing(){
    const {user, setUser, password, setPassword, email, setEmail, setMessage} = useContext(Contexto);

    async function registerUser(){
        let reqs = await fetch(config.urlRootNode+'create', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            nameUser: user,
            passwordUser: password,
            emailUser: email
          })
        });
        let ress=await reqs.json();
        navigation.navigate('Login');
      }

    return(
        <View>
            <Text>Crie sua conta!</Text>
            <TextInput
            placeholder='Usuario'
            onChangeText={text=> setUser(text)}
            >

            </TextInput>
            <TextInput
            placeholder='Password'
            onChangeText={text=> setPassword(text)}
            >

            </TextInput>

            <TextInput
            placeholder='E-mail'
            onChangeText={text=> setEmail(text)}
            >

            </TextInput>
            <TouchableOpacity
            style={{width:100, height:30, backgroundColor:'blue'}}
            onPress={()=> registerUser()}
            >
                <Text>Criar!</Text>
            </TouchableOpacity>
            
        </View>
    )
}