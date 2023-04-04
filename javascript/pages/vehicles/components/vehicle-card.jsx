import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";

const VehicleCard = ({ vehicle }) => {
  const { year, color, make, model, vinSnippet, status, upcoming } = vehicle;
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${year} ${color} ${make} ${model}`}</Text>
        <Text style={styles.titleDetail}>{` - ${vinSnippet}`}</Text>
      </View>
      <View style={styles.statusContainer}>
        <MaterialCommunityIcons name={"account"} color="#5C5F5F" />
        <Text style={styles.status}>{`Status: ${status}`}</Text>
      </View>
      {upcoming && (
        <View style={styles.upcomingContainer}>
          <MaterialCommunityIcons name={"wrench"} color={theme.colors.error} />
          <Text style={{ ...styles.upcoming, color: theme.colors.error }}>
            UPCOMING {upcoming}
          </Text>
        </View>
      )}
    </View>
  );
};

export default VehicleCard;
