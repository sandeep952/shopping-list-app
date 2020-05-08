import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const Item = (props) => {
  return (
      <TouchableNativeFeedback onPress={()=>console.log('clicked')}>
      <View style={styles.item}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
      </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "purple",
    margin: 20,
    padding: 20,
  },
  text: {
    color: "white",
  },
});
export default Item;
