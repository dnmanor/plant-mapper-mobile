import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Search from "../components/Search";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainheader}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f1f2",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "100%",
    alignContent: "center",
  },
  mainheader: {
    fontSize: 40,
    fontWeight: "bold",
    alignContent: "flex-start",
    padding: 25,
  },
});
