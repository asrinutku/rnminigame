import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Game = () => {
  return (
    <View style={styles.screen}>
      <Text>Your Guess</Text>

      <View>
        <Text>Low or High</Text>
        <Text>- +</Text>
      </View>

      <View>
        <Text>See Rounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default Game;
