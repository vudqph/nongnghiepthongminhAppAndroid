import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 120,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    color: colors.white,
    borderRadius: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.black,
  },
  contentImage: {
    height: 100,
    width: 100,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
