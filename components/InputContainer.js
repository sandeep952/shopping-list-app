import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const InputContainer = () => {
  const [text, setText] = useState("");

  const handleChange = (item) => {
    setText(item);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        placeholder="Enter item here"
        onChangeText={() => handleChange()}
      />
      <Button title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
    }
});

export default InputContainer;
