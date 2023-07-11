import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const devWidth = Dimensions.get('window').width;
const devHeight = Dimensions.get('window').height;

const navigateToPostScreen = (props) => {
    props.navigation.navigate('PostScreen');
}

const MainUIScreen = (props) => {

    return (
        <View style={styles.container}>
            <Text>main ui screen</Text>

            <TouchableOpacity style={styles.plusIconContainer} onPress={ () => navigateToPostScreen(props)}>
                <View >
                    <FontAwesome name='plus' size={25} color={'white'} />
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: devWidth,
        height: devHeight,
    },
    plusIconContainer: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        zIndex: 1,
        position: 'absolute',
        bottom: 60,

    }
})

export default MainUIScreen;