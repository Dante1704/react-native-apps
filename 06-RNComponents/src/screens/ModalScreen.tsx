import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/Theme';

export const ModalScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />
            <Modal
                animationType="slide"
                transparent={true} //The transparent prop determines whether your modal will fill the entire view. Setting this to true will render the modal over a transparent background.
                visible={modalVisible}

                // This is required on Apple TV and Android.
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={stylesModalScreen.centeredView}>
                    <View style={stylesModalScreen.modalView}>
                        <Text style={stylesModalScreen.modalText}>Hello World!</Text>
                        <Pressable
                            style={[stylesModalScreen.button, stylesModalScreen.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={stylesModalScreen.textStyle}>Cerrar Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[stylesModalScreen.button, stylesModalScreen.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={stylesModalScreen.textStyle}>Mostrar Modal</Text>
            </Pressable>
        </View>
    );
};

const stylesModalScreen = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
