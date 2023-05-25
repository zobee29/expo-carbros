import React, { useState } from "react";
import { View } from "react-native";
import {
  TextInput,
  Button,
  Portal,
  Modal,
  List,
  Divider,
} from "react-native-paper";
import Typography from "components/typography";

const CustomDropdown = ({ label, data, value, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onItemSelect = (item) => {
    onSelect(item);
    setModalVisible(false);
  };

  return (
    <View>
      <Typography>{label}</Typography>
      <TextInput
        label={value ? value : "Select"}
        value={value}
        onTouchStart={() => setModalVisible(true)}
      />
      <Portal>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
          <List.Section>
            {data.map((item) => (
              <React.Fragment key={item.value}>
                <List.Item
                  title={item.label}
                  onPress={() => onItemSelect(item)}
                />
                <Divider />
              </React.Fragment>
            ))}
          </List.Section>
        </Modal>
      </Portal>
    </View>
  );
};

export default CustomDropdown;
