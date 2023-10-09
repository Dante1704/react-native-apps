import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouceValue } from '../hooks/useDebouceValue';



interface Props {
    //uso un generico para indicar que puede ser cualquier propiedad de estilo que se le pueda dar a un View
    style?: StyleProp<ViewStyle>
}

//hacer este componente aparte del search screen me permite
//tener mas control sobre lo que va a escribir el usuario en el input
//para hacer el debouncer
export const SearchInput = ({ style }: Props) => {


    const [textValue, setTextValue] = useState('');

    const { debouncedValue } = useDebouceValue({ value: textValue });

    //solo cuando cambia el debouncedValue voy a ejecutar este useEffect
    useEffect(() => {
        console.log(debouncedValue);
    }, [debouncedValue]);


    return (
        <View style={{
            ...styles.container,
            ...style as any,
        }}
        >
            <View style={{ ...styles.textBackground }} >
                <TextInput
                    placeholder="Buscar Pokémon"
                    style={{ ...styles.textInput }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue} //Siempre use el onChange solo, este no lo conocia
                />
                <Icon
                    name="search-outline"
                    color={'grey'}
                    size={30}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: (Platform.OS === 'ios') ? 0 : 2,
    },
});
