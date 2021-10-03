import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={32} color="green" />
      {/* <TextInput></TextInput> */}
    </View>
  );
}

const styles = StyleSheet.create({ container: {} });

export default Search;
