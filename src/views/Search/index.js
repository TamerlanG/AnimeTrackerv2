import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity,  View } from 'react-native'

/* DEV */

import { Card } from 'components/Card';
import { Container, Inner } from 'components/Common/Container';
import { SearchBar } from 'components/Input';

/* REDUX */
import { connect } from 'react-redux';
import { fetchSearch } from 'store/search/search.action.js';


const Search = (props) => {
  const { data, navigation } = props;
  const [seasonItemLimit, setSeasonItemLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [type, setTypes] = useState('anime');

  const handleChangeText = value => setQuery(value);

  const handleSubmit = () => {
    props.fetchSearch({query: query, type: type });
  }

  const goToDetails = id => navigation.navigate('Details', { id, store_name: 'search_data' });

  const renderSearchCard = ({item}) => (
    <View style={{width: '50%', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => goToDetails(item.mal_id)}>
        <Card image_url={item.image_url} title={item.title} />
      </TouchableOpacity>
    </View>
  )

  const renderListHeaderItem = (
    <SafeAreaView style={{marginBottom: 16}}>
        <SearchBar
          placeholder="naruto"
          value={query}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmit}
        />
    </SafeAreaView>
  )

  const loadMoreSeasonAnime = () => setSeasonItemLimit(seasonItemLimit + 10);

  return (
    <Container>
        <FlatList
            data={data && Object.values(data).slice(0, seasonItemLimit)}
            renderItem={renderSearchCard}
            keyExtractor={(item) => item.title}
            initialNumToRender={4}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={renderListHeaderItem}
            onEndReached={loadMoreSeasonAnime}
            onEndReachedThreshold={1}
        />
    </Container>
  )
}

const mapStateToProps = state => ({
  data: state.search.data
});

const mapDispatchToProps = {
  fetchSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
