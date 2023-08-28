import React, { useContext } from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/Theme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    industria: string;
    data: string[];
}

const casas: Casas[] = [
    {
        industria: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin'],
    },
    {
        industria: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Thor', 'Spiderman'],
    },
    {
        industria: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama'],
    },
];

export const CustomSectionListScreen = () => {

    const { theme } = useContext(ThemeContext);

    const renderListHeaderComponent = () => <HeaderTitle title="Section List" />;
    const listFooterComponent = () => <HeaderTitle title={'Total de industrias: ' + casas.length} />;

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            {/* <HeaderTitle title="Section List" /> */}
            <SectionList
                sections={casas} //hay que pasarle un array de objetos donde cada objeto tiene el nombre de su seccion y sus elementos correspondientes
                SectionSeparatorComponent={ItemSeparator}
                ListHeaderComponent={renderListHeaderComponent} //el titulo de la lista con la ventaja de que tambien se scrollea, no queda sticky
                stickySectionHeadersEnabled={true} //Android: Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.
                renderSectionHeader={({ section: { industria } }) => (
                    <View style={{ backgroundColor: theme.colors.background }}>
                        <HeaderTitle title={industria} />
                    </View>
                )}//aca agarra el nombre de la seccion automaticamante y lo inserta antes que todos sus elementos
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text style={{ color: theme.colors.text }}>{item}</Text>}
                // ItemSeparatorComponent={itemSeparator}
                renderSectionFooter={({ section }) => <HeaderTitle title={'Total: ' + section.data.length} />}
                ListFooterComponent={listFooterComponent}
            />
        </View>
    );
};
