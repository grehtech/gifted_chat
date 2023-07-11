import React, { useContext, useState } from 'react';
import { ScrollView, View, useWindowDimensions, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import UpperUserProfile from './../components/UpperUserProfile';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const pictureRoute = () => (
    <ScrollView style={{ flex: 1, }} >
        <Text> Picture</Text>
    </ScrollView>
);

const followerRoute = () => (
    <ScrollView style={{ flex: 1, }}>
        <Text>Followers</Text>
    </ScrollView>
);

const followingRoute = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text>Following</Text>
        </ScrollView>
    )

}

const aboutRoute = (props) => {

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text>About</Text>
        </ScrollView>
    )

}

const renderScene = SceneMap({
    picture: pictureRoute,
    followers: followerRoute,
    following: followingRoute,
    about: aboutRoute,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'green' }}
        style={{
            backgroundColor: 'white',
        }}
        activeColor='green'
        inactiveColor='black'
        renderLabel={({ route }) => (
            <Text style={{ fontSize: 12 }}>
                {route.title}
            </Text>
        )}
    />
);


export default function TabViewExample() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'picture', title: 'Picture' },
        { key: 'followers', title: 'Followers' },
        { key: 'following', title: 'Following' },
        { key: 'about', title: 'About' }
    ]);

    return (
        <>
            <UpperUserProfile />

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                pagerStyle={{
                    backgroundColor: 'white'
                }}
                renderTabBar={renderTabBar}
            />
        </>

    );
}

const styles = StyleSheet.create({
    logoutContainer: {
        alignItems: 'center',
    },
    logoutBtn: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
        margin: 25,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5
    }
})