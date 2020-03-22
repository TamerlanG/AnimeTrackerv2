import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

/** THIRD PARTY LIBRARIES */
import dayjs from 'dayjs'

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

const Recommendation = (props) => {
  const [currentSeason, setCurrentSeason] = useState(null);
  const [currentYear, setCurrentYear] = useState(null);
  const [seasonItemLimit, setSeasonItemLimit] = useState(10);

  const {current_season_data, today_data} = props;

  useEffect(() => {
    const current_season = CapitalizeString(getCurrentSeason());
    const current_year = dayjs().year();

    setCurrentYear(current_year);
    setCurrentSeason(current_season);

    props.fetchCurrentSeason();
    props.fetchTodaySchedule();
  }, []);

  const loadMoreSeasonAnime = () => setSeasonItemLimit(seasonItemLimit + 10);

  const renderAnimeCard = ({item}) => (
    <Card image_url={item.image_url} title={item.title} />
  )

  const renderScheduleCard = ({item}) => (
    <HorizontalCard 
      image_url={item.image_url} 
      title={item.title} 
      type={item.type}
      score={item.score}
    />
  )

  return (
    <ScrollView>
      <Container>
        <SafeAreaView>
          <Inner row style={extraStyles.recommendations_tab} >
            <DoublePica>{currentSeason} {currentYear} Anime</DoublePica>
            <Minion>Show More</Minion>
          </Inner>
        </SafeAreaView>
        <Inner style={{marginTop: 12}}>
          <Carousal
            data={current_season_data && current_season_data.slice(0, seasonItemLimit)} 
            renderItem={renderAnimeCard}
            keyExtractor={(item) => item.title}
            onEndReached={loadMoreSeasonAnime}
          />
          </Inner>
          <Inner>
            <DoublePica>Latest Updated Episodes</DoublePica>
        </Inner>
        <Inner style={{marginTop: 12}}>
        <Carousal
          data={today_data || []} 
          renderItem={renderScheduleCard}
          keyExtractor={(item) => item.title}
          horizontal={false}
        />
        </Inner>
      </Container>
    </ScrollView>
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