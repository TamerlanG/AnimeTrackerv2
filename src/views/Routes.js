import React from 'react';
import { View, Text } from 'react-native';

/** Component Libraries */
import Icon from 'react-native-vector-icons/SimpleLineIcons';

/** REACT NAVIGATION */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

/** Screens */
import List from 'views/List';
import Details from 'views/Details';
import Recommendations from 'views/Recommendation';
import Search from 'views/Search';
import Settings from 'views/Settings'

/** REDUX */
import { connect } from 'react-redux';

/** DEV */
import { themes } from 'themes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes = ({ current_theme }) => {
  const handleTabScreenOptions = ({ route }) => ({
    tabBarIcon: () => {
      const ICON_SIZE = 16;
      const ICON_COLOR = "black";

      let iconName;

      switch (route.name) {
        case 'Discover':
          iconName = "like";
          break;
        case 'Search':
          iconName = "magnifier";
          break;
        case 'Settings':
          iconName = "wrench";
          break;
      }

      return <Icon name={iconName} size={ICON_SIZE} color={ICON_COLOR} />
    }
  })

  const handleTabBarOptions = ({
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  })
  return (
    <NavigationContainer theme={themes[current_theme]}>
      <Tab.Navigator screenOptions={handleTabScreenOptions} tabBarOptions={handleTabBarOptions} initialRouteName="Discover">
        <Tab.Screen name="Discover" component={DiscoverStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const DiscoverStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Discover" component={Recommendations} />
    <Stack.Screen 
      name="List" 
      component={List} 
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen 
      name="Details" 
      component={Details} 
      options={({ route }) => ({ title: 'Details' })}
    />
  </Stack.Navigator>
)

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Find an Anime" component={Search} />
    <Stack.Screen 
      name="Details" 
      component={Details} 
      options={({ route }) => ({ title: 'Details' })}
    />
  </Stack.Navigator>
)

const mapStateToProps = state => ({
  current_theme: state.common.theme
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
