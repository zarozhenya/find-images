import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  field: {
    margin: 0,
    borderWidth: 1,
    fontSize: '$primaryFontSize',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
  },
  lightField: {
    color: '$primaryColor',
    borderColor: '$primaryColor',
  },
  darkField: {
    color: '$primaryDarkColor',
    borderColor: '$primaryDarkColor',
  },
});
