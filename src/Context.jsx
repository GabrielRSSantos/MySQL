import React, {createContext, useState} from 'react';
import {View, Text} from 'react-native';
import Paginas from './Paginas';

export const Contexto = createContext();

export default function Context(){
    var [user, setUser] = useState(null);
    var [email, setEmail] = useState(null);
    var [password, setPassword] = useState(null);
    var [message, setMessage] = useState(null);


    return(
        <Contexto.Provider value={{user, setUser, email, setEmail, password, setPassword, message, setMessage}}>
        <Paginas/>
        </Contexto.Provider>
    )
}
