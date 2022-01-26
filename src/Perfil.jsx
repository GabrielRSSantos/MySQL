import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function Perfil({navigation}){
    return(
        <View>
            <Text>Pagina de Perfil!</Text>
            <TouchableOpacity
      style={{width:200, height:100, backgroundColor:'blue', marginTop:20}}
      onPress={() => navigation.navigate('Teste')}
      >
        <Text>Logar</Text>
        </TouchableOpacity>
        </View>
    )
}