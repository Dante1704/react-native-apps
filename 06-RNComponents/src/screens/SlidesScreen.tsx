import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ImageSourcePropType, SafeAreaView, Text, View, Dimensions, Image, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

export const SlidesScreen = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = (item: Slide) => (
        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 5, padding: 40, justifyContent: 'center' }}>
            <Image
                source={item.img}
                style={{
                    width: 350,
                    height: 400,
                    resizeMode: 'center',
                }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.desc}</Text>
        </View>
    );
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50,
            }}>
            <Carousel
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout="default"
                vertical={false} //sin esto no funciona
                //cuando deslizo que capture el index y lo setee. Al rerenderizarse se actualiza.
                onSnapToItem={(index) => { setActiveSlide(index); }}
            />
            <View style={styles.paginationContainer}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeSlide} //se para en el dot correcto gracias a que se va actualizando con onSnapToItem.
                    //containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: '#5856d6',
                    }}
                    /* inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }} */
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <Pressable
                    style={styles.getIntoPressable}
                    android_ripple={{ color: '#262561' }}
                //</SafeAreaView>onPress={() => setModalVisible(!modalVisible)}
                >
                    <Icon name="chevron-forward-outline" color={'white'} size={25} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Entrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856d6',
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
    },
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    getIntoPressable: {
        width: 125,
        height: 40,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5856D6',
    },
});
