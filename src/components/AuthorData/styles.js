import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    fontFamily: '$textFamily',
    color: '$primaryColor',
    fontSize: '$primaryFontSize',
    marginLeft: 10,
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
    borderColor: '$primaryColor',
    borderRadius: 8,
    padding: 8,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
