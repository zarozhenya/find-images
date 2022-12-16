import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  text: {
    fontFamily: '$textFamily',
    fontSize: '$primaryFontSize',
  },
  darkText: {
    color: '$primaryDarkColor',
  },
  lightText: {
    color: '$primaryColor',
  },
  wrapper: {
    marginBottom: 16,
    borderWidth: 0.5,
    borderRadius: 8,
  },
  darkWrapper: {
    borderColor: '$primaryDarkColor',
  },
  lightWrapper: {
    borderColor: '$primaryColor',
  },
  dataContainer: {
    borderTopWidth: 0.5,
    paddingRight: 8,
    paddingLeft: 8,
  },
  lightDataContainer: {
    borderColor: '$primaryColor',
  },
  darkDataContainer: {
    borderColor: '$primaryDarkColor',
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
  lightContainerBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '$primaryColor',
  },
  darkContainerBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '$primaryDarkColor',
  },
  tagItem: {
    minWidth: 50,
    padding: 8,
    borderRadius: 20,
    display: 'flex',
  },
  tagText: {
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 18,
  },
});
