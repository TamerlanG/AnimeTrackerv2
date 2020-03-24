/** REACT-NATIVE-GESTURE MUST ALWAYS BE ON TOP */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { enableScreens } from 'react-native-screens';

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
        <Routes />
    </Provider>
  );
};

export default App;
