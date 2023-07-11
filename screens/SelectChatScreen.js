import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import profilePic from './../images/profilePic.jpeg';

const SelectChatScreen = (props) => {

    const navigateToChatScreen = (props) => {
        props.navigation.navigate('ChatScreen', {
            nou: NOU,
        });
    }

    const [NOU, SetNOU] = useState('Name of User');
    const [msg, setMsg] = useState('user chats appears here...');
    const [msgSentTime, setMsgSentTime] = useState('11.50');
    const [value, setValue] = useState('');

    return (
        <>

        <View style={styles.searchSection}>
            <TextInput
                style={styles.searchBar}
                placeholder='Search Chat'
            />
            <FontAwesome name='search' size={20} style={styles.searchIcon} />
        </View>
            




            <TouchableOpacity onPress={() => navigateToChatScreen(props)}>
                <View style={styles.container}>
                    <Image
                        style={styles.profilePicture}
                        source={profilePic}
                    />
                    <View style={styles.messageContainer}>
                        <Text style={styles.name}>{NOU}</Text>
                        <Text style={styles.message}>{msg}</Text>
                        <Text style={styles.time}>{msgSentTime}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        marginBottom: 12,
    },

    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: 5
    },

    name: {
        marginLeft: 80,
        fontWeight: 'bold',
        fontSize: 16
    },

    message: {
        marginLeft: 80,
        width: "50%"
    },

    time: {
        marginLeft: 80,
        fontSize: 12
    },
    messageContainer: {
        marginTop: -55
    },
    searchBar: {
        backgroundColor: 'silver',
        padding: 5,
        borderRadius: 20,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 35
    },
    searchSection: {
        flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
        
    },
    searchIcon: {
        marginRight: 15,
        height: 25,
        width: 25,
        position: 'absolute',
        right: 13,

    }
})

export default SelectChatScreen;