import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    fontFamily: '$textFamily',
    color: '$primaryColor',
    fontSize: '$primaryFontSize',
  },
  wrapper: {
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: '$primaryColor',
    borderRadius: 8,
  },
  dataContainer: {
    paddingRight: 8,
    paddingLeft: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  containerBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '$primaryColor',
  },
  tagItem: {
    minWidth: 50,
    padding: 8,
    borderRadius: 20,
    display: 'flex',
  },
  tagText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 8,
  },
});
