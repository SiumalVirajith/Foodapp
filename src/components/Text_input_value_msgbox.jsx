import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import React, {useState} from 'react';

const Text_input_value_msgbox = () => {
  const [text_val, setText] = useState(0);

  function changeVal(v) {
    setText(v);
  }

  function dispalyVal() {
    Alert.alert('Text says', text_val);
  }

  return (
    <View>
      <TextInput style={styles.input} onChangeText={changeVal} />
      <Button title="Show value" onPress={dispalyVal} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    paddingHorizontal: 20,
    padding: 5,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 40,
    marginVertical: 20,
  },
});

export default Text_input_value_msgbox;
