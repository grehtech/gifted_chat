import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;

const PostScreen = () => {

    const [isShow, setIsShow] = useState(false);

    const [postText, setPostText] = useState();
    const [att1, setAtt1] = useState()
    const [att2, setAtt2] = useState()
    const [att3, setAtt3] = useState()
    const [att4, setAtt4] = useState()

    const handleDocumentSelection = async () => {
        try {
            const result = await DocumentPicker.pick({
                allowMultipleSelection: true,
                type: DocumentPicker.types.allFiles
            })
        } catch (error) {
            
        }
    }

    const makePost = () => {
        // make post to db by using fetch

        let url = 'https://makepost.com/post.php'

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'multipart/form-data'
            },
            body : JSON.stringify({
                post : postText,
                att1 : att1,
                att2 : att2,
                att3 : att3,
                att4 : att4
            })
            .then( response => response.json())
            .then( (result) => {

                if(result[0].success){
                    alert('posted successfully')
                }
            }).catch( err => console.log(err))
        })
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder='Type something...'
                    multiline={true}
                    numberOfLines={10}
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                    value={postText}
                    onChangeText={(text) => { setPostText(text) }}

                />
                
            </View>

            <View style={styles.uploadContainer}>
                <Text>something to upload</Text>
                

            </View>

            <View style={styles.postBtnContainer}>                
                <TouchableOpacity style={styles.postBtnIcon} onPress={makePost}>
                    <FontAwesome name='paper-plane' size={25} color={'white'} />
                </TouchableOpacity>   
            </View>
           
                   
            

            <View style={styles.attachmentContainer}>
                <TouchableOpacity style={styles.attachementIcon} onPress={handleDocumentSelection}>
                    <MaterialIcon name='paperclip' size={25} color={'white'} />
                </TouchableOpacity>
            </View>





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: devWidth,
        height: devHeight
    },
    input: {
        backgroundColor: 'white',
        textAlignVertical: 'top',
        padding: 5,
        margin: 15,
        borderRadius: 10
    },
    attachmentContainer: {
        position: 'absolute',
        zIndex: 1,
        right: 30,
        bottom: 130
    },
    attachementIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    picIcon: {
        bottom: 85,
        right: -20
    },
    vidIcon: {
        bottom: 80,
        right: 30
    },
    audioIcon: {
        bottom: 60,
        right: 30
    },
    docIcon: {
        bottom: 50,
        right: -20
    },
    postBtnContainer: {
        position: 'absolute',
        zIndex: 1,
        left: 20,
        bottom: 130
    },
    postBtnIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
  
})

export default PostScreen;