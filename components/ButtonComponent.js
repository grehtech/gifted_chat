import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const BtnBlack = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.btnPrimary}> {props.name} </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnPrimary: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 15
    }
})

