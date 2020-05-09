import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Shopping List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    height:90,
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20

  },

  headerText: {
    fontSize: 20,
    color: "white",
  },
});

export default Header;
