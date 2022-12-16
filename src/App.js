import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './navigation';
import {store} from './redux/store';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

EStyleSheet.build({
  $textFamily: 'Roboto-Regular',
  $primaryColor: '#303030',
  $primaryBackground: '#ffffff',
  $primaryDarkBackground: '#303030',
  $primaryDarkColor: '#ffffff',
  $primaryFontSize: 16,
});
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
