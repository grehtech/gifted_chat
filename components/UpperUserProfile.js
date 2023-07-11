import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, Button, ActivityIndicator } from 'react-native';
import { UserDataContext } from '../Context/UserDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const userCoverPhoto = require('./../images/profilePic.jpeg');
const profilePicture = require('./../images/profilePic2.jpeg');



const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const UpperUserProfile = (props) => {

    useEffect(() => {

        AsyncStorage.getItem('@userId').then((res) => {
            setUserID(res)
        })

        // get user data direct from server
        const url = 'https://mychatapp.destanclassics.com.ng/getUserDetails.php';

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: userID,
            })
        }).then( response => response.json())
        .then((result) => {
            if(result[0].SUCMSG){
                result.map((result)=>{
                    setUserName(result.USERNAME)
                    setName(result.NAME_OF_USER)
                })
            }
        }).catch( (err) => {
            console.log(err)
        })



    })

    const [userId, setUserId,] = useContext(UserDataContext);
    const [userID, setUserID] = useState();

    const [Logout, setLogout] = useState(false);
    const navigation = useNavigation();

    const [userName, setUserName] = useState();
    const [name, setName] = useState();

    const logout = () => {
        Alert.alert(
            "LOGUOT",
            "Are you sure?",
            [
                {
                    text: 'CANCEL',
                    style: 'cancel'
                },
                {
                    text: 'YES',
                    onPress: async () => {
                        const token = await AsyncStorage.getItem('userLoginToken')

                        if (token !== null) {
                            AsyncStorage.removeItem('userLoginToken').then(() => {
                                navigation.replace("LoginScreen");
                            })
                        }
                    }
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.coverPhotoContainer}>
                <Image
                    style={styles.coverPhoto}
                    source={userCoverPhoto}
                />

            </View>

            <Image
                style={styles.profilePic}
                source={profilePicture}
            />


            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name ? name : <ActivityIndicator color='black' />}</Text>
                <Text style={styles.username}>{userName ? userName : <ActivityIndicator color='black' />}</Text>
            </View>
            <TouchableOpacity onPress={logout}>
                <Text style={styles.logout}>LOGOUT</Text>
            </TouchableOpacity>




            <View style={styles.followerCountContainer}>
                <Text style={styles.followerText}>
                    117k {'\n'}
                    something
                </Text>
                <Text style={styles.followerText}>
                    2k {'\n'}
                    Followers
                </Text>
                <Text style={styles.followerText}>
                    8.7k {'\n'}
                    Following
                </Text>
            </View>
            {/* <View style={styles.followerContainer}>
                <Text>Something</Text>
                <Text>Followers</Text>
                <Text>Following</Text>
            </View> */}



        </View>
    )
}

const styles = StyleSheet.create({

    coverPhotoContainer: {
        width: deviceWidth,
        backgroundColor: 'black',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    coverPhoto: {
        resizeMode: 'cover',
        height: 200,
    },

    profilePic: {
        backgroundColor: 'yellow',
        width: 60,
        height: 70,
        marginLeft: 30,
        marginTop: -25,
        zIndex: 1,
        borderRadius: 10
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 100,
    },
    username: {
        marginLeft: 100
    },
    followerCountContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        alignContent: 'center'
    },
    followerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    followerText: {
        textAlign: 'center',
        backgroundColor: 'green',
        color: 'white',
        padding: 8,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 10
    },

    nameContainer: {
        marginTop: -45
    },
    logout: {
        textAlign: 'right',
        right: 20
    }
})

export default UpperUserProfile;