import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: '$textFamily',
    color: '$primaryColor',
    fontSize: '$primaryFontSize',
  },
  darkText: {
    color: '$primaryDarkColor',
  },
  lightText: {
    color: '$primaryColor',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,

    borderRadius: 8,
    padding: 8,
  },
  darkItem: {
    borderColor: '$primaryDarkColor',
  },
  lightItem: {
    borderColor: '$primaryColor',
  },
  itemText: {
    fontFamily: '$textFamily',

    fontSize: '$primaryFontSize',
  },
  darkItemText: {
    color: '$primaryDarkColor',
  },
  lightItemText: {
    color: '$primaryColor',
  },
  itemData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  textContainer: {
    marginLeft: 20,
  },
});
