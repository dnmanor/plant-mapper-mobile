import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RandomPlantTab = (
  scientific_name: string,
  common_names: string,
  category: string,
  ...rest: any
) => {
  return (
    <View style={styles.container}>
      <View style={styles.textinfo}>
        <Text style={styles.scientific_name}>{scientific_name}</Text>
        <Text style={styles.common_names}>{common_names}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  textinfo: {
    display: "flex",
  },
  scientific_name: {
    fontSize: 25,
    fontWeight: "700",
  },
  common_names: {
    fontSize: 20,
    fontWeight: "500",
  },
  category: {
    fontSize: 15,
    fontWeight: "300",
  },
});

export default RandomPlantTab;
