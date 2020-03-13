/** REACT-NATIVE-GESTURE MUST ALWAYS BE ON TOP */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

/** React Navigation */
import {NavigationContainer} from '@react-navigation/native';

//** REDUX */
import {Provider} from 'react-redux';
import createStore from 'store';

import Routes from 'views/Routes';

export const store = createStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View>
          <Text>Hello World</Text>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
