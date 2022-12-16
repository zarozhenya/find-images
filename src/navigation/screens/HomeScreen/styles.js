import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  background: {
    flex: 1,
  },
  darkBackground: {
    backgroundColor: '$primaryDarkBackground',
  },
  lightBackground: {
    backgroundColor: '$primaryBackground',
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
