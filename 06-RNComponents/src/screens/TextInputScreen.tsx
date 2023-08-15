import React, { useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/Theme';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (value: string, field: keyof typeof form) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <View style={{ ...styles.globalMargin, flex: 1 }}>
                            <HeaderTitle title="TextInputScreen" />
                            <TextInput
                                style={stylesScreen.inputStyle}
                                placeholder="Dante Kaddarian"
                                autoCorrect={false} //evitamos que autocorrija lo que escribimos.
                                autoCapitalize="words"
                                onChangeText={(value) => handleChange(value, 'name')} //aca no esta por defecto el evento onChange
                            />
                            <TextInput
                                style={stylesScreen.inputStyle}
                                placeholder="dante@dante.com"
                                autoCorrect={false}
                                onChangeText={(value) => handleChange(value, 'email')}
                                keyboardType="email-address" //email-address me permite tener el @ sin tener que cambiar a simbolos en el teclado
                            />

                            <HeaderTitle title={JSON.stringify(form, null, 2)} />
                            <HeaderTitle title={JSON.stringify(form, null, 2)} />

                            <TextInput
                                style={stylesScreen.inputStyle}
                                placeholder="+541134961991"
                                onChangeText={(value) => handleChange(value, 'phone')}
                                keyboardType="phone-pad" // phone-pad me muestra directamente numeros
                            />
                        </View>
                        <View style={stylesScreen.btnContainer}>
                            <Button title="Submit" onPress={() => null} />
                        </View>
                        <View style={{ height: 100 }} />
                    </>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'black',
        marginVertical: 10,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
