import { View, TextInput, StyleSheet } from 'react-native'

const TInputt = (props) => {
    return (
        <View>
            <TextInput
                style={styles.tinput}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    tinput: {
        padding: 5,
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
        marginBottom: 20
    }
})

export default TInputt;