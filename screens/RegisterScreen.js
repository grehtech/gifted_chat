import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import TInput from '../components/TInput';
import { BtnBlack } from '../components/ButtonComponent';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';

import Loading from '../components/Loading';

const DevWidth = Dimensions.get('window').width;
const DevHeight = Dimensions.get('window').height;

const LoginScreenNavigate = (props) => {
    props.navigation.navigate('LoginScreen')
}


const RegisterScreen = (props) => {



    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [country, setCountry] = useState();
    const [province, setProvince] = useState();
    const [address, setAddress] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [isLoading, setIsLoading] = useState(false);


    const registerLogic = () => {
        // validate password and confirm password

        if (name == null) {
            alert('Please enter name')
        } else if (password == null) {
            alert('Password required')
        } else if (confirmPassword == null) {
            alert('Please confirm password')
        } else if (password != confirmPassword) {
            alert('password mismatch')
        } else {
            setIsLoading(true);

            const url = 'https://mychatapp.destanclassics.com.ng/user_registration.php';

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email.toLowerCase(),
                    phone: phone,
                    country: country,
                    province: province,
                    address: address,
                    password: password,
                })
            }).then((response) => response.json())
                .then((res) => {
                    alert(res)

                    if (res === 'User Registered Successfully') {
                        setIsLoading(false)
                        props.navigation.navigate('UIScreen')
                    }
                }).catch(err => {
                    setIsLoading(false)
                    console.error(err)
                });


            // createUserWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Registered
            //     const user = userCredential.user;
            //     updateProfile(user, {
            //         displayName: name,
            //     })
            //     .then(() => {
            //         alert('Registered, please login.');
            //     })
            //     .catch((error) => {
            //         alert(error.message);
            //     })
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     alert(errorMessage);
            // }); 
        }
    }

    return (
        <>
            {isLoading ? <Loading /> : null}
            <ScrollView style={styles.container}>
                <Text style={styles.createAccount}>CREATE AN ACCOUNT</Text>

                <TInput
                    placeholder='Enter Name'
                    value={name}
                    onChangeText={(name) => { setName(name) }}
                />

                <TInput
                    placeholder='Pick a username'
                    value={username}
                    onChangeText={(username) => { setUsername(username) }}
                />

                <TInput
                    placeholder='Enter Email'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(email) => { setEmail(email) }}
                />
                <TInput
                    placeholder='Enter Phone'
                    keyboardType='number-pad'
                    value={phone}
                    onChangeText={(phone) => { setPhone(phone) }}
                />
                <TInput
                    placeholder='Enter Country'
                    value={country}
                    onChangeText={(country) => { setCountry(country) }}
                />
                <TInput
                    placeholder='Enter Province/State'
                    value={province}
                    onChangeText={(province) => { setProvince(province) }}
                />
                <TInput
                    placeholder='Enter Address'
                    value={address}
                    onChangeText={(address) => { setAddress(address) }}
                />
                <TInput
                    placeholder='Choose password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => { setPassword(password) }}
                />
                <TInput
                    placeholder='Confirm password'
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }}
                />

                <View style={styles.btn}>
                    <BtnBlack name='REGISTER' onPress={registerLogic} />
                </View>

                <View style={styles.reg}>
                    <Text style={styles.regText}> Already Registered?</Text>

                    <TouchableOpacity onPress={() => { LoginScreenNavigate(props) }}>
                        <Text style={styles.regTextReg}>Login</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
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
    },

    createAccount: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

export default RegisterScreen;