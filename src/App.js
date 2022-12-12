import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './navigation';
import {store} from './redux/store';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $textFamily: 'Roboto-Regular',
  $primaryColor: '#303030',
  $primaryFontSize: 16,
});
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
