import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/Theme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin'],
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman'],
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama'],
    },
];

export const CustomSectionListScreen = () => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            {/* <HeaderTitle title="Section List" /> */}
            <SectionList
                sections={casas} //hay que pasarle un array de objetos donde cada objeto tiene el nombre de su seccion y sus elementos correspondientes
                stickySectionHeadersEnabled={true} //Android: Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section: { casa } }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitle title={casa} />
                    </View>
                )}//aca agarra el nombre de la seccion automaticamante y lo inserta antes que todos sus elementos
            />
        </View>
    );
};
