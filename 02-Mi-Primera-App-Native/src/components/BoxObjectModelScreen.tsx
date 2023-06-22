import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Box Object Model
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal: 20,
        fontSize: 20,
        /* backgroundColor: 'red', */
        borderWidth: 10,
    },
});
export default BoxObjectModelScreen;
