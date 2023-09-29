import React, {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGame from './screens/StartGame';
import {LinearGradient} from 'expo-linear-gradient';
import Game from './screens/Game';

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
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
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
