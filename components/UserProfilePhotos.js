import { View, Text } from 'react-native';

const UserProfilePhotos = (props) => {
    return (
        <View
            style={props.style} 
            isHide={props.isHide}
        >
            <Text>Photos section</Text>
        </View>
    )
}

export default UserProfilePhotos;