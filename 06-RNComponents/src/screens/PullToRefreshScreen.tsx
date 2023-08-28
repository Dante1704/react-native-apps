import React, { useContext, useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { View, ScrollView, RefreshControl } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const PullToRefreshScreen = () => {

    const { theme } = useContext(ThemeContext);
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500);
    };

    return (
        <ScrollView
            refreshControl={
                /* A RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView. Only works for vertical ScrollViews (horizontal prop must be false). */
                <RefreshControl
                    refreshing={refreshing} //cuando este es true, se activa el refresh
                    onRefresh={handleRefresh} //con esta prop le indico que hacer cuando se refresca y tambien para deterlo
                    progressViewOffset={150} //para manejar la distancia que baja el icono de refresh
                    progressBackgroundColor={theme.colors.text} //el background del refresh
                    colors={[theme.colors.primary]} //Android: aca puedo configurar los colores que va tomando el refresh
                />
            }
        >
            <View>
                <HeaderTitle title="Pull to refresh" />
            </View>
        </ScrollView>
    );
};
