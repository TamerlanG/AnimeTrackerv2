import React, { useState } from 'react'
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native'

/* REDUX */
import { connect } from 'react-redux';

/* DEV */
import { Card } from 'components/Card';
import Spacing from 'components/Common/Spacing';

const List = props => {
    const [seasonItemLimit, setSeasonItemLimit] = useState(10);
    const {current_season_data, navigation} = props;

    const goToDetails = id => navigation.navigate('Details', { id, store_name: 'current_season_data' });

    const renderAnimeCard = ({item}) => (
        <TouchableOpacity style={{width: '50%', alignItems: 'center'}} onPress={() => goToDetails(item.mal_id)}>
          <Card image_url={item.image_url} title={item.title} />
        </TouchableOpacity>
    )

    const loadMoreSeasonAnime = () => setSeasonItemLimit(seasonItemLimit + 10);

    return (
        <SafeAreaView>
         <Spacing bottom={16} />
         <FlatList
            data={current_season_data && Object.values(current_season_data).slice(0, seasonItemLimit)}
            renderItem={renderAnimeCard}
            keyExtractor={(item) => item.title}
            initialNumToRender={4}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMoreSeasonAnime}
            onEndReachedThreshold={1}
        />
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    current_season_data: state.season.current_season.data, 
});
  
const mapDispatchToProps = {
    
};
  
export default connect(mapStateToProps, mapDispatchToProps)(List)
