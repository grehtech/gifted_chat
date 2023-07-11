import { View, Text } from 'react-native';

const UserProfilePost = (props) => {
    return (
        <View
            style={props.style}
            isHide={props.isHide}
        >
            <Text>Post Section</Text>
        </View>
    )
}

export default UserProfilePost;