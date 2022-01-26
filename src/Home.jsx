import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import config from '../config/config.json';
import {Contexto} from './Context';



export default function Home({navigation}) {
  const {user, setUser, email, setEmail, password, setPassword, message, setMessage} = useContext(Contexto);
  let [data, setData] = useState({});

   const readUser = async () => {
      const response = await fetch(
        config.urlRootNode+'read'
      );
      const json = await response.json();
      setData(json);
    
  };

  useEffect(() => {
    readUser();
  }, []);
  
  console.log(data);
  
  

  return (
    <View style={styles.container}>
     
      <Text style={{marginTop:20}}>Bem vindo(a) {data.name}</Text>
      <Text style={{marginTop:20}}>Seu E-mail é: {data.email}</Text>


      {/* <TouchableOpacity
      style={{width:200, height:100, backgroundColor:'blue'}}
      onPress={() => readUser()}
      >
        <Text>Testar</Text>
        </TouchableOpacity> */}

      {/* <TouchableOpacity
      style={{width:200, height:100, backgroundColor:'blue', marginTop:20}}
      onPress={() => login()}
      >
        <Text>Logar</Text>
        </TouchableOpacity>  */}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
