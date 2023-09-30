import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../util/colors';

const Titlebar = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    padding: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    color: colors.accent500,
    borderColor: colors.accent500,
  },
});

export default Titlebar;
