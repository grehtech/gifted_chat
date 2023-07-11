import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreenNavigate = async (props) => {
    try {
        const token = await AsyncStorage.getItem('userLoginToken');

        if(token !== null){
            props.navigation.replace('UIScreens')
        } else {
            props.navigation.navigate('LoginScreen')
        }
    } catch (error) {
        alert(error);
    }
    
}

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"green"} />

            <Text style={styles.textStyle}>Welcome to ...</Text>


            <TouchableOpacity>
                <Button
                    title='Get Started'
                    onPress={() => LoginScreenNavigate(props)}
                    color={'black'}

                />
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: DeviceHeight,
        width: DeviceWidth,
        justifyContent: 'center',
        padding: 20
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30,
    },

})
export default HomeScreen;