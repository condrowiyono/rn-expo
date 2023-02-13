import React, { memo } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Item = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: "http://via.placeholder.com/160x160",
        }}
      />
      <Text>Item</Text>
    </View>
  );
};

export default memo(Item);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
});
