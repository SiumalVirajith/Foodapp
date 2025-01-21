import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.contaner}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    color: 'red',
  },
});

export default App;
