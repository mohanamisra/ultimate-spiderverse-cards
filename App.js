import {View, Text, StyleSheet} from "react-native";
import Card from "./components/Card";

import React from 'react';

const App = () => {
  return (
      <View style = {styles.container}>
        <Text style = {styles.heading}>MARVEL</Text>
          <Card/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#283278",
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 48,
    textAlign: "center",
    marginVertical: 25,
  },
})

export default App;