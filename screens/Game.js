import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Titlebar from '../components/Titlebar';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const Game = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userNumber),
  );

  return (
    <View style={styles.screen}>
      <Titlebar title="Your guess" />

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
