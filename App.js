import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, Modal } from "react-native";
import Header from "./components/Header";
export default function App() {
  const [itemText, setItemText] = useState("");
  const [isModalVisible, changeModalVisiblity] = useState(false);
  const [list, setList] = useState([]);
  const handleChange = (item) => {
    setText(item);
  };

  const addItem = () => {
    setList([
      ...list,
      {
        key: Math.random(),
        data: itemText,
      },
    ]);
    setItemText("");
    changeModalVisiblity(false);
  };

  const openModal = () => {
    changeModalVisiblity(true);
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.addButton}>
        <Button title="Add items" onPress={openModal} />
      </View>
      <Modal style={styles.modal} visible={isModalVisible}>
        <View style={styles.inputContainer}>
          <Text>Enter Your Item name here</Text>
          <TextInput
            style={styles.input}
            value={itemText}
            placeholder="Enter item here"
            onChangeText={() => handleChange()}
          />
          <Button title="Add" onPress={addItem} />
        </View>
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
    padding: 10,
    margin: 20,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 40,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    marginVertical:20,
    padding:10
  },

  modal: {
    paddingTop: 40,
  },
});
