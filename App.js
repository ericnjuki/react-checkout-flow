import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemsReducer from './reducer'

const store = createStore(itemsReducer);
export default function App() {

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}