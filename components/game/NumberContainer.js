import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../util/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {color: colors.accent500, fontSize: 36, fontWeight: 'bold'},
});

export default NumberContainer;
