import ImageColors from 'react-native-image-colors';

//funcion que me extrae los colores del poster de la movie en base al OS.

export const getImageColors = async (uri: string) => {
    //extraigo el color con el metodo getColors propio de ImageColors, es un metodo async
    const colors = await ImageColors.getColors(uri, {
        //fallback: '#FFF', //si no lo logra, va a dar como resultado este color.
    });

    // la funcion getColors
    // solo me devuelve un color de fallback y yo tengo dos
    // por eso los declaro aca abajo
    let fallbackPrimaryColor = 'blue';
    let fallbackSecondaryColor = 'white';

    let primaryColor;
    let secondaryColor;

    switch (colors.platform) {
        case 'android':
            primaryColor = colors.dominant ?? fallbackPrimaryColor;
            secondaryColor = colors.average ?? fallbackSecondaryColor;
            break;
        case 'ios':
            primaryColor = colors.primary ?? fallbackPrimaryColor;
            secondaryColor = colors.secondary ?? fallbackSecondaryColor;
            break;
        default:
            throw new Error('Unexpected platform');
    }
    return { primaryColor, secondaryColor };
};
