import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import styles from "./style";

const HeaderButtons = ({
  setOpenSearch,
  onAdd
}) => {
  return (
    <View style={styles.container}>
      <IconButton
        size={24}
        style={{ padding: "10px", color: "black" }}
        icon="magnify"
        onPress={() => setOpenSearch(true)}
      />
      <IconButton
        size={24}
        onPress={onAdd}
        style={{ padding: "10px", color: "black" }}
        icon="plus"
      />
    </View>
  );
};

export default HeaderButtons;
