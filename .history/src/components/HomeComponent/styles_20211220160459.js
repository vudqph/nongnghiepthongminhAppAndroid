import {StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  farmWrapper: {
    flexDirection: 'row',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
  },
  wrapperr: {
    shadowColor: '#00000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderRadius: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
  },

  item: {
    padding: 20,
    flex: 1,
  },
  name: {
    paddingBottom: 15,
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  location: {paddingBottom: 15, fontSize: 18, fontFamily: 'Lato-Regular'},
  time: {fontSize: 18, fontFamily: 'Lato-Regular'},

  addFarm: {
    justifyContent: 'center',
    backgroundColor: colors.orange,
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    margin: 2,
  },
  textFarm: {
    fontSize: 18,
    fontSize: 21,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
});
