import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        styes={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>

        <View style={styles.button}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#4e0329',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: 'ddb52f',
    borderBottomWidth: 2,
    color: 'ddb52f',
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
