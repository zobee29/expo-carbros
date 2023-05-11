import React from "react";
import { Text, View } from "react-native";
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
    <View style={styles.container}>
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
      <View>
        <IconButton
          size={24}
          onPress={() => navigation.navigate("Edit Vehicle", { vehicle })}
          style={{  color: theme.colors.primary }}
          icon="pencil"
        />
      </View>
    </View>
  );
};

export default VehicleCard;
