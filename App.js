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
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    padding: 20,
    fontSize: 48,
    textAlign: "center",
  }
})

export default App;