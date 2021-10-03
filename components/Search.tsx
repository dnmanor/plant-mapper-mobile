import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={25}
        color="black"
        style={{ paddingRight: 10 }}
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setSearchTerm(e);
        }}
        value={searchTerm}
        placeholder="Common or Scientific Names"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 25,
  },
  input: {},
});

export default Search;
