import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Ionicons name="search" size={25} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setSearchTerm(e);
          }}
          value={searchTerm}
          placeholder="Common or Scientific Names"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    fontSize: 25,
    borderRadius: 20,
    width: "90%",
    backgroundColor: "white",
  },
  input: {},
  icon: {
    paddingRight: 10,
  },
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Search;
