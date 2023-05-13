import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButton } from "react-native-paper";
import { useTheme } from "react-native-paper";

const VehicleCard = ({ vehicle, navigation }) => {
  const { year, color, make, model, vin, upcoming, is_available } = vehicle;
  const theme = useTheme();

  const lastFour = vin && vin.slice(-4);
  const status = is_available ? "Available" : "Unavailable";

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Edit Vehicle", { vehicle })} activeOpacity={0.7}>
      <View style={styles.information}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${year} ${color} ${make} ${model}`}</Text>
        <Text style={styles.titleDetail}>{` - ${lastFour}`}</Text>
      </View>
      {status && (
        <View style={styles.statusContainer}>
          <MaterialCommunityIcons name={"account"} color="#5C5F5F" />
          <Text style={styles.status}>{`Status: ${status}`}</Text>
        </View>
      )}
      {upcoming && (
        <View style={styles.upcomingContainer}>
          <MaterialCommunityIcons name={"wrench"} color={theme.colors.error} />
          <Text style={{ ...styles.upcoming, color: theme.colors.error }}>
            UPCOMING {upcoming}
          </Text>
        </View>
      )}
      </View>
    </TouchableOpacity>
  );
};

export default VehicleCard;
