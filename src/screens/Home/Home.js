import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.textMain}>Home</Text>
            <Text style={styles.textPrimary}>Any ideas?</Text>
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

export default Home;