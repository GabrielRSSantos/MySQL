import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Contexto} from './Context';
import config from '../config/config.json';

export default function Login({navigation}){
    const {setUser, user, password, setPassword, setMessage, message} = useContext(Contexto);

    async function login(){
        let reqs = await fetch(config.urlRootNode+'login', {
          method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nameUser: user,
            passwordUser: password,
          })
        });
        let ress=await reqs.json();
        console.log(ress.name);
        navigation.navigate('Home');
      }


    return(
        <View>
            <Text>Log in</Text>
            <Text>{message}</Text> 
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

            <TouchableOpacity
            style={{width:200, height:30, backgroundColor:'blue'}}
            onPress={()=>login()}
            >
                <Text>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{width:200, height:30, backgroundColor:'red'}}
            onPress={()=>navigation.navigate('Sign')}
            >
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}