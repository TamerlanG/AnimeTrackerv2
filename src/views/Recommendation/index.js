import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

/** THIRD PARTY LIBRARIES */
import dayjs from 'dayjs'
import { useTheme } from '@react-navigation/native';

/* DEV */
import { getCurrentSeason, CapitalizeString } from 'utils/helper';

import Carousal from 'components/Carousal';
import { Card, HorizontalCard } from 'components/Card';
import { Container, Inner } from 'components/Common/Container';
import { DoublePica, Minion } from 'components/Common/Typography';

/* REDUX */
import { connect } from 'react-redux';
import { fetchCurrentSeason } from 'store/season/season.action.js';
import { fetchTodaySchedule } from 'store/schedule/schedule.action.js';

/**
 * TODO: ADD SKELETON LOADING IN HORIZONTAL CAROUSAL
 */

const Recommendation = (props) => {
  const [currentSeason, setCurrentSeason] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [seasonItemLimit, setSeasonItemLimit] = useState(10);

  const {current_season_data, today_data, navigation} = props;

  const { colors } = useTheme();

  useEffect(() => {
    const current_season = CapitalizeString(getCurrentSeason());
    const current_year = dayjs().year();

    setCurrentYear(current_year);
    setCurrentSeason(current_season);

    props.fetchCurrentSeason();
    props.fetchTodaySchedule();
  }, []);

  const loadMoreSeasonAnime = () => setSeasonItemLimit(seasonItemLimit + 10);

  const goToList = () => navigation.navigate('List', { name: `${currentSeason} ${currentYear} Anime`});

  const goToDetails = id => navigation.navigate('Details', { id, store_name: 'current_season_data' });

  const renderAnimeCard = ({item}) => (
    <TouchableOpacity onPress={() => goToDetails(item.mal_id)} >
      <Card image_url={item.image_url} title={item.title} />
    </TouchableOpacity>
  )

  const renderScheduleCard = ({item}) => (
    <HorizontalCard 
      image_url={item.image_url} 
      title={item.title} 
      type={item.type}
      score={item.score}
    />
  )

  const renderListHeaderComponent = (
    <>
      <SafeAreaView>
        <Inner row style={extraStyles.recommendations_tab} >
          <DoublePica color={colors.primary}>{currentSeason} {currentYear} Anime</DoublePica>
          <TouchableOpacity onPress={goToList} >
            <Minion>Show More</Minion>
          </TouchableOpacity>
        </Inner>
      </SafeAreaView>
      <Inner style={{marginVertical: 12}}>
        <Carousal
          data={current_season_data && Object.values(current_season_data).slice(0, seasonItemLimit)} 
          renderItem={renderAnimeCard}
          keyExtractor={(item) => item.title}
          onEndReached={loadMoreSeasonAnime}
        />
      </Inner>
      <Inner style={{marginBottom: 12}}>
        <DoublePica>Today's Releases</DoublePica>
      </Inner>
    </>
  )

  return (
      <Container>
        <Carousal
          ListHeaderComponent={renderListHeaderComponent}
          data={today_data || []} 
          renderItem={renderScheduleCard}
          keyExtractor={(item) => item.title}
          horizontal={false}
        />
      </Container>
  );
};

const extraStyles = StyleSheet.create({
  recommendations_tab: {
    justifyContent: 'space-between'
  }
});

const mapStateToProps = state => ({
  current_season_data: state.season.current_season.data, 
  today_data: state.schedule.today.data
});

const mapDispatchToProps = {
  fetchCurrentSeason,
  fetchTodaySchedule
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation)