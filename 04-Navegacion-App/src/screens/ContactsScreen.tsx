import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    //doble destructuring
    const { authState: { isLoggedIn }, signIn, logOut } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>
            {/* si estoy logueado no muestro el boton */}
            {!isLoggedIn ?
                <Button
                    title="Sign In"
                    onPress={signIn}
                /> :
                <Button
                    title="Log Out"
                    onPress={logOut}
                />
            }
        </View>
    );
};
