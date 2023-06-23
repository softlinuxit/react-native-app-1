import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";

function Create() {
    return (
        <View style={styles.container}>
            <Text style={styles.textMain}>Create</Text>
            <Text style={styles.textPrimary}>For Minimal</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textMain: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
    },
    textPrimary: {
        color: 'red',
        fontWeight: 'semibold'
    }
});

export default Create;