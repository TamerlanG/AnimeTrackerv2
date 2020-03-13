import React from 'react';
import {View, Text} from 'react-native';

/** REACT NAVIGATION */
import {createStackNavigator} from '@react-navigation/stack';

/**Screens */
import Recommendations from 'views/Recommendations';

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recommendations" component={Recommendations} />
    </Stack.Navigator>
  );
};

export default Routes;
