import React from 'react'
import { StyleSheet } from 'react-native';
import styled from 'styled-components';

/** THIRD PARTY LIBRARIES */
import FastImage from 'react-native-fast-image'

/* DEV */
import { ImageCaption } from 'components/Common/Typography';

export class Card extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
                <FastImage
                    style={extraStyles.image_container}
                    source={{ uri: this.props.image_url }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <ImageCaption>{this.props.title}</ImageCaption>
            </Container>
        )
    }
}

export function HorizontalCard({image_url, title, type, score}) {
    return (
        <HorizontalContainer>
            <FastImage
                style={extraStyles.image_container_round}
                source={{ uri: image_url }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <HorizontalDetails>
            <ImageCaption>{title}</ImageCaption>
            <ImageCaption>{type}</ImageCaption>
            <ImageCaption>{score}</ImageCaption>
            </HorizontalDetails>
        </HorizontalContainer>
    )
}

const extraStyles = StyleSheet.create({
    image_container: {
        width: 130, 
        height: 200, 
        alignSelf: 'flex-start', 
        borderRadius: 10,
        marginBottom: 5
    },
    image_container_round: {
        width: 40,
        height: 40,
        borderRadius: 30,
    }
})

/* UNIT COMPONENTS */
const Container = styled.View`
    width: 150px;
    height: 220px;
    marginBottom: 16px;
`

const HorizontalContainer = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
`

const HorizontalDetails = styled.View`
    margin-left: 10px;
    align-items: flex-start;
`
