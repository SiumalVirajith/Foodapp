import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Input_text = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#aaa',
    width: 300,
    marginTop: 50,
    borderRadius: 20,
    paddingLeft: 30,
  },
});

export default Input_text;
