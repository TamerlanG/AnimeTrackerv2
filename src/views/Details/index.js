import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

/** THIRD PARTY LIBRARIES */
import FastImage from 'react-native-fast-image'
import styled from 'styled-components';

/* REDUX */
import { connect } from 'react-redux';

/* DEV */

import { Container, Inner } from 'components/Common/Container';
import { DoublePica, Minion } from 'components/Common/Typography';


const Details = props => {
    const { id, store_name } = props.route.params;
    const { search_data, current_season_data } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        const arrays = {
            search_data,
            current_season_data
        }
        const currentArray = arrays[store_name];
        setData(currentArray[id]);
    }, [])

    return (
            <Container>
                {data && ( 
                    <>
                        <Inner row>
                            <FastImage
                                style={extraStyles.image_container}
                                source={{ uri: data.image_url }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <Inner style={extraStyles.details_row}>
                                <DoublePica>{data.title}</DoublePica>
                                <Minion>{data.type}</Minion>
                                <Minion>{data.episodes || "N/A"}</Minion>
                                <Minion>{data.score}</Minion>
                                <Minion>{data.rated}</Minion>
                            </Inner>
                        </Inner>
                        <Minion>
                            {data.synopsis}
                        </Minion>
                    </>
                )}
            </Container>
    )
}

const extraStyles = StyleSheet.create({
    image_container: {
        width: '48%', 
        height: 300, 
        alignSelf: 'flex-start', 
        borderRadius: 10,
        marginBottom: 5
    },
    details_row: {
        marginLeft: 10,
        width: '50%'
    }
})


const mapStateToProps = state => ({
    search_data: state.search.data,
    current_season_data: state.season.current_season.data,
});
  
const mapDispatchToProps = {
    
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Details)
