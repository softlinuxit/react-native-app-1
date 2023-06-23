import React, { useState } from 'react';
import {
    Text,
    View,
    Pressable,
    StyleSheet,
    Alert,
    Modal
} from "react-native";
import ModalView from '../../components/Modal/Modal';


function Settings() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal Has been closed");
                    setModalVisible(!modalVisible);
                }}
            >
                <ModalView modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </Modal>

            <View>
                <Text style={styles.textMain}>Settings</Text>
                <Pressable
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textPrimary}>Get Dimensions</Text>
                </Pressable>
            </View>
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

export default Settings;