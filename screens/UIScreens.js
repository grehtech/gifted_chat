import { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { CurrentScreenContext } from '../Context/CurrentScreenContext';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import UserProfileScreen from './UserProfileScreen';
import MainUIScreen from './MainUIScreen';
import NotificationScreen from './NotificationScreen';
import SelectChatScreen from './SelectChatScreen';
import SearchScreen from './SearchScreen';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const green = 'green';

const Tab = createBottomTabNavigator();

const UIScreens = () => {
    return (
        <Tab.Navigator initialRouteName='MainUIScreen' >

            <Tab.Screen
                name="SelectChatScreen"
                component={SelectChatScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: green,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <IonIcon name='chatbubbles' size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: green,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesomeIcon name='bell' size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="MainUIScreen"
                component={MainUIScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: green,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Icon name='home' size={size} color={color} />
                    )
                }}

            />

            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: green,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Icon name='search' size={size} color={color} />
                    )
                }}

            />

            <Tab.Screen
                name="UserProfileScreen"
                component={UserProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: green,
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesomeIcon name='user' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}


export default UIScreens;