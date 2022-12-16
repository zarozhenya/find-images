import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    fontFamily: '$textFamily',
    fontSize: '$primaryFontSize',
    marginLeft: 10,
  },
  darkText: {
    color: '$primaryDarkColor',
  },
  lightText: {
    color: '$primaryColor',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,

    borderRadius: 8,
    padding: 8,
  },
  darkContainer: {
    borderColor: '$primaryDarkColor',
  },
  lightContainer: {
    borderColor: '$primaryColor',
  },
});
