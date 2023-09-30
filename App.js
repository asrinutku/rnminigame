import React, {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGame from './screens/StartGame';
import {LinearGradient} from 'expo-linear-gradient';
import Game from './screens/Game';
import colors from './util/colors';

function App() {
  const [userNumber, setUserNumber] = useState();

  const chosenNumberHandler = chosenNumber => {
    setUserNumber(chosenNumber);
  };

  let screen = <StartGame onNumberChosen={chosenNumberHandler} />;

  if (userNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[colors.primary700, colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}> {screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});

export default App;
