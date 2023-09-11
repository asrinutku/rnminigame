import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 100,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#8E44AD',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default StartGame;
