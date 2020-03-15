/** REACT-NATIVE-GESTURE MUST ALWAYS BE ON TOP */
import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';

/** React Navigation */
import { NavigationContainer } from '@react-navigation/native';

/** REDUX */
import { Provider } from 'react-redux';
import createStore from 'store';

/** Dev */
import Routes from 'views/Routes';

enableScreens();
export const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
