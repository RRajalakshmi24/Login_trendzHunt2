import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from '../../src/Navigator';
import { Provider } from 'react-redux';
import store from '../../src/store';
// custom fonts
const fontsData = {
  Nunito: require('../../src/assets/font/Inter-Regular.ttf'),
  'Nunito-light': require('../../src/assets/font/Inter-Light.ttf'),
  'Nunito-SemiBold': require('../../src/assets/font/Inter-Medium.ttf'),
  'Nunito-Bold': require('../../src/assets/font/Inter-SemiBold.ttf'),
};

export default function ShopApp() {
  const [loaded] = useFonts(fontsData);
  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
