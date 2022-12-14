import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: '$textFamily',
    color: '$primaryColor',
    fontSize: '$primaryFontSize',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '$primaryColor',
    borderRadius: 8,
    padding: 8,
  },
  itemText: {
    fontFamily: '$textFamily',
    color: '$primaryColor',
    fontSize: '$primaryFontSize',
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
