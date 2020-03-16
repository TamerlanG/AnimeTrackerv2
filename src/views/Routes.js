import React from 'react';
import { View, Text } from 'react-native';

/** Component Libraries */
import Icon from 'react-native-vector-icons/SimpleLineIcons';

/** REACT NAVIGATION */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

/**Screens */
import Library from 'views/Library';
import Recommendations from 'views/Recommendation';
import Search from 'views/Search';
import Settings from 'views/Settings'

const Tab = createBottomTabNavigator();

const Routes = () => {

  const handleTabScreenOptions = ({ route }) => ({
    tabBarIcon: () => {
      const ICON_SIZE = 16;
      const ICON_COLOR = "black";

      let iconName;

      switch (route.name) {
        case 'Library':
          iconName = "book-open";
          break;
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
    <Tab.Navigator screenOptions={handleTabScreenOptions} tabBarOptions={handleTabBarOptions} initialRouteName="Discover">
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Discover" component={Recommendations} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Routes;
