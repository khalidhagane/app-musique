import {Text,StyleSheet, View} from 'react-native';
// import styles from '../styles/appContainer';

function Favorite() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorite</Text>
    </View>
  );
}

export default Favorite;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#343a40',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
  },
});
