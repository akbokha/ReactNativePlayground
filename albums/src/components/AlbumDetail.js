import React from 'react';
import {
    Text,
    View,
    Image,
    Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {
        headerContentStyle, thumbnailStyle, thumbnailContainerStyle,
        headerTextStyle, imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button onPressMethod={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },

    thumbnailContainerStyle: {
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignContent: 'center'
    }
};

export default AlbumDetail;