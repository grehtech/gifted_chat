import React, { useState, useCallback, useEffect, useContext } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { StyleSheet, Text, View } from 'react-native';

import { UserDataContext} from '../Context/UserDataContext';

const ChatScreen = ({route}) => {

  const [messages, setMessages] = useState([]);

  const [userId] = useContext(UserDataContext)

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer Greh',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])

    // get the current logged in user id
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))

    // save to db
    const savechaturl = 'https://mychatapp.destanclassics.com.ng/chats.php';

    fetch(savechaturl, {
      method: 'post',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // name: chatersnames,
        // user: userId,

      })
    })


  }, [])

  return (
    <View style={{ flex: 1 }}>

      <Text style={styles.chatTitle}>{route.params.nou}</Text>
      <GiftedChat

        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: userId,
          avatar: 'gotten from database',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  chatTitle: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 5,
  }
})

// user id should be gotten from database and it should be user email
// store the chat in database and asyncstorage


export default ChatScreen;