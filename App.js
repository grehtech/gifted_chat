import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserDataProvider } from './Context/UserDataContext';
import { CurrentScreenProvider } from './Context/CurrentScreenContext';


// screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ChatScreen from './screens/ChatScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UIScreens from './screens/UIScreens';
import PostScreen from './screens/PostScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <UserDataProvider>
      <NavigationContainer>
        <CurrentScreenProvider>
          <Stack.Navigator initialRouteName='HomeScreen'>

            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name='LoginScreen'
              component={LoginScreen}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name='RegisterScreen'
              component={RegisterScreen}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name='ChatScreen'
              component={ChatScreen}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen
              name='PostScreen'
              component={PostScreen}
              options={{
                title: 'Post'
              }}
            />

            <Stack.Screen
              name='UIScreens'
              component={UIScreens}
              options={{
                headerShown: false
              }}
            />


          </Stack.Navigator>
        </CurrentScreenProvider>
      </NavigationContainer>
    </UserDataProvider>
  );
};

export default MyStack;