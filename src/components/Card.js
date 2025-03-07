import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Spacing} from '../../constants/utils';
const styles = StyleSheet.create({
  card: {
    shadowColor: 'gray',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: Spacing.hs / 5,
    marginVertical: Spacing.vs,
    paddingVertical: Spacing.vs,
    paddingHorizontal: Spacing.hs,
  },
});

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

export default Card;
