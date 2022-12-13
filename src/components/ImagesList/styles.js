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
  itemData: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    alignItems: 'center',
  },
});
