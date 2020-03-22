import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'

/* DEV */
import { Canon } from 'components/Common/Typography';
import { Container } from 'components/Common/Container';


/* REDUX */
import { connect } from 'react-redux';
import { fetchCurrentSeason, fetchSeason } from 'store/season/season.action.js';
import { fetchTodaySchedule } from 'store/schedule/schedule.action.js';
import { fetchAnime } from 'store/anime/anime.action.js';
import { fetchManga } from 'store/manga/manga.action.js';

const Library = props => {

  return (
    <SafeAreaView>
      <Container>
        <Canon>FONTS</Canon>
      </Container>
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