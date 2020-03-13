import React from 'react';
import {View, Text} from 'react-native';

//** REDUX */
import {Provider} from 'react-redux';
import createStore from 'store';

export const store = createStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hello World</Text>
      </View>
    </Provider>
  );
};

export default App;
