import React, { useState, useEffect } from 'react'
import { View, Switch, Text } from 'react-native'

/** THIRD PARTY LIBRARIES */
import { useTheme } from '@react-navigation/native';

/* REDUX */
import { connect } from 'react-redux';
import { toggleTheme } from 'store/common/common.action.js';

const Settings = props => {
  const { current_theme, toggleTheme } = props;
  const [isDark, setDarkMode] = useState(false);

  const { colors } = useTheme();

  const handleThemeChange = value => {
    toggleTheme(value ? 'dark' : 'light');
    setDarkMode(value);
  };

  useEffect(() => {
    if(current_theme === 'dark'){
      setDarkMode(true);
    }
  }, [current_theme]);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Switch
        onValueChange = {handleThemeChange}
        value = {isDark}
      />
      <Text style={{color: colors.primary}}>Toggle Dark mode 2</Text>
    </View>
  )
}

const mapStateToProps = state => ({
  current_theme: state.common.theme
});

const mapDispatchToProps = {
  toggleTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
