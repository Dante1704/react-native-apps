import React, { useState } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { View, ScrollView, RefreshControl } from 'react-native';


export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
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
                />
            }
        >
            <View>
                <HeaderTitle title="Pull to refresh" />
            </View>
        </ScrollView>
    );
};
