import {View, Text, StyleSheet} from "react-native";
import Card from "./components/Card";

import React from 'react';

const App = () => {
  return (
      <View style = {styles.container}>
        <Text style = {styles.heading}>MARVEL</Text>
        <View style={styles.cardsContainer}>
          <Card/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#283278",
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 48,
    textAlign: "center",
  },
  cardsContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  }
})

export default App;