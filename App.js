import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, Modal } from "react-native";
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";

export default function App() {
  const [text, setText] = useState("");
  const [isModalVisible, changeModalVisiblity] = useState(false);
  
  const handleChange = (item) => {
    setText(item);
  };

  
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.addButton}>
        <Button  title="Add items" />
      </View>
      <Modal style={styles.modal} visible={isModalVisible}>
        <TextInput
          value={text}
          placeholder="Enter item here"
          onChangeText={() => handleChange()}
        />
        <Button title="Add" />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  addButton: {
    padding:10,
    margin: 20,
  },

  modal: {
    paddingTop: 40,
  },
});
