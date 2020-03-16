import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import config from 'config';

/* REDUX */
import { connect } from 'react-redux';
import { fetchCurrentSeason } from 'store/season/season.action.js';
import { fetchTodaySchedule } from 'store/schedule/schedule.action.js';

const Library = props => {

  useEffect(() => {
    props.fetchCurrentSeason();
    props.fetchTodaySchedule();
  }, [])

  return (
    <SafeAreaView>
      <Text>{config.API_URL}</Text>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  fetchCurrentSeason,
  fetchTodaySchedule
};

export default connect(mapStateToProps, mapDispatchToProps)(Library)
