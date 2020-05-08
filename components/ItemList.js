import React from "react";
import { View, Text, FlatList ,StyleSheet} from "react-native";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.list}
        renderItem={(dataItems) => <Item>{dataItems.item.value}</Item>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ItemList;
