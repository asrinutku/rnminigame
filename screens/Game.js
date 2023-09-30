import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Titlebar from '../components/ui/Titlebar';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let min = 1;
let max = 100;

const Game = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userNumber),
  );

  const handleGuess = guessDirection => {
    if (
      (guessDirection === 'lower' && currentGuess < props.userNumber) ||
      (guessDirection === 'greater' && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (guessDirection === 'low') {
      max = currentGuess + 1;
    } else {
      min = currentGuess;
    }
    const newRandomNumber = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Titlebar title="Your guess" />
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>High or low</Text>
        <View>
          <PrimaryButton onPress={handleGuess('high')}>+</PrimaryButton>
          <PrimaryButton onPress={handleGuess('low')}>-</PrimaryButton>
        </View>
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
