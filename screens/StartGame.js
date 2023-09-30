import {Alert, StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';
import colors from '../util/colors';

const StartGame = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const valueChangeHandler = value => {
    setEnteredValue(value);
  };

  const resetInput = () => {
    setEnteredValue('');
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Enter a valid Number !', [
        {text: 'Okay', style: 'destructive', onPress: resetInput},
      ]);
      return;
    }

    props.onNumberChosen(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        styes={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={enteredValue}
        onChangeText={valueChangeHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>

        <View style={styles.button}>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});

export default StartGame;
