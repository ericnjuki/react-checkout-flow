import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {

  return (
    <Navigator />
  );
}