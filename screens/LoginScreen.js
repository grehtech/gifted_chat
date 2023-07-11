import React, { useState, useContext, createContext, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import TInput from '../components/TInput';
import { BtnBlack } from '../components/ButtonComponent';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';



import Loading from './../components/Loading';

import { UserDataContext } from '../Context/UserDataContext';

import { setLogLevel } from 'firebase/app';

// save userData in context

const DevWidth = Dimensions.get('window').width;
const DevHeight = Dimensions.get('window').height;



const RegisterScreenNavigate = (props) => {
    props.navigation.navigate('RegisterScreen')
}

const logInState = async () => {
    
    try {
        const userLoginToken = uuid.v4();
        await AsyncStorage.setItem('userLoginToken', userLoginToken)
    } catch (e) {
        alert(e);
    }
}

const LoginScreen = (props) => {

    const [email, setEmail] = useState();
    const [password, setPasword] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const [userId, setUserId] = useContext(UserDataContext);

    const navigation = useNavigation();


    const loginLogic = () => {
        setIsLoading(true);
        const url = 'https://mychatapp.destanclassics.com.ng/loginVal.php';


        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }).then((response) => response.json())
            .then((result) => {

                if (result[0].SUCMSG) {

                   logInState();

                    setIsLoading(false);

                    result.map((result) => {
                        alert(result.SUCMSG);
                        setUserId(result.USER_ID);
                        try {
                            const userID = AsyncStorage.setItem('@userId', result.USER_ID).then(()=>{
                                navigation.replace('UIScreens')
                            });
    
                        } catch (error) {
                            alert(error)   
                        }
                    });
                    // set userId to asyncStorage
                    
                    
                    

                } else {
                    alert(result);
                    setIsLoading(false)
                }
            }).catch(err => {
                console.error(err)
                setIsLoading(false)
            });
    }





    return (
        <>
            {isLoading ? <Loading /> : null}
            <View style={styles.container}>
                <TInput
                    placeholder='Enter email'
                    value={email}
                    onChangeText={(email) => { setEmail(email) }}
                    keyboardType='email-address'
                />
                <TInput
                    placeholder='Enter password'
                    value={password}
                    onChangeText={(password) => { setPasword(password) }}
                    secureTextEntry={true}
                />

                <View style={styles.btn} >
                    <BtnBlack name='LOGIN' onPress={loginLogic} />
                </View>

                <View style={styles.reg}>
                    <Text style={styles.regText}> Don't have an account?</Text>

                    <TouchableOpacity onPress={() => { RegisterScreenNavigate(props) }}>
                        <Text style={styles.regTextReg}>Register</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,

    },

    btn: {
        marginTop: 20,
        color: 'white'
    },

    input: {
        marginTop: 10
    },

    reg: {
        marginTop: 40
    },

    regText: {
        textAlign: 'center'
    },

    regTextReg: {
        textAlign: 'center',
        color: 'blue'
    }
})

export default LoginScreen;