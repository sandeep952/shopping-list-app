import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, Button } from "react-native";

const Item = (props) => {
  return (
      <TouchableNativeFeedback onPress={()=>console.log('clicked')}>
      <View style={styles.item}>
        <Text style={styles.text}>{props.children}</Text>
        <Button title='delete' color='red' onPress={props.deleteItem}/>
      </View>
      </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: "blue",
    borderWidth:2,
    margin: 20,
    padding: 20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  text: {
    color: "black",
  },
});
export default Item;
