import React from "react";
import {
    Text,
    View,
    Pressable,
    StyleSheet
} from "react-native";
import Entype from 'react-native-vector-icons/Entypo';

function ModalView({ modalVisible, setModalVisible }) {
    return (
        <View style={styles.component}>
            <View style={styles.modalView}>
                <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>
                        <Entype name="cross" color={'black'} size={40} />
                    </Text>
                </Pressable>
                <Text style={styles.modalText}>Screen Height</Text>
                <Text style={styles.modalTextSmall}>812 dp</Text>
                <Text style={styles.modalText}>Screen Width</Text>
                <Text style={styles.modalTextSmall}>375 dp</Text>
                <Text style={styles.modalTextSimple}>dp stands for something something</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c0c0c0'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    modalTextSmall: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    },
    modalTextSimple: {
        marginTop: 5,
        textAlign: 'center',
    },
    button: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});


export default ModalView;