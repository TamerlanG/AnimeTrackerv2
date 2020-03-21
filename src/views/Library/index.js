import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'

/* DEV */
import { Title } from 'components/Common/Typography';


/* REDUX */
import { connect } from 'react-redux';
import { fetchCurrentSeason, fetchSeason } from 'store/season/season.action.js';
import { fetchTodaySchedule } from 'store/schedule/schedule.action.js';
import { fetchAnime } from 'store/anime/anime.action.js';
import { fetchManga } from 'store/manga/manga.action.js';

const Library = props => {

  useEffect(() => {
    // props.fetchCurrentSeason();
    // props.fetchTodaySchedule();
    // props.fetchSeason({year: 1999, season: 'summer'});
    // props.fetchAnime({id: 23})
    // props.fetchManga({id: 23, request: 'pictures'});
    
  }, [])

  return (
    <SafeAreaView>
      <Title>FONTS</Title>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  fetchCurrentSeason,
  fetchTodaySchedule,
  fetchSeason,
  fetchAnime,
  fetchManga
};

export default connect(mapStateToProps, mapDispatchToProps)(Library)