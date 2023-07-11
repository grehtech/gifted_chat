import React, { useState } from 'react'
import { View, Text, ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import LoaderGif from './../images/loading-gray.json';

const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;

const Loading = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.loadingContainer}>
            <View style={{
                backgroundColor: 'black',
                padding: 5,
                margin: 100,
                borderRadius: 10,
            }}>
                <ActivityIndicator size='large' color='white' />
                <Text style={styles.loadingText}>PLEASE WAIT ... </Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    loadingContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'silver',
        width: devWidth,
        height: devHeight,
        justifyContent: 'center',
        opacity: 0.9,
        zIndex: 1

    },
    loadingText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }

})

export default Loading;