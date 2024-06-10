import {View, Text, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import Card from "./components/Card";
import MCUSpiderMan from "./assets/MCUSpiderMan.jpg"

import React from 'react';

const App = () => {
  return (
      <SafeAreaView style = {styles.container}>
        <ScrollView style={{width: "100%"}} contentContainerStyle={{alignItems: "center", flexGrow: 1 }}>
          <Text style = {styles.heading}>THE SPIDEY CARD GAME</Text>
          <Card charImage={MCUSpiderMan} charPoints={"+100"} charName={"MCU" +
              " Spider-Man"} charDesc={"The teenager who just can't catch a break. Well, at least we got Mr. Stark, right?"}
                charQuote={"Mr. Stark...I don't feel so good..."}/>
          <Card charImage={MCUSpiderMan} charPoints={"+100"} charName={"MCU" +
              " Spider-Man"} charDesc={"The teenager who just can't catch a break. Well, at least we got Mr. Stark, right?"}
                charQuote={"Mr. Stark...I don't feel so good..."}/>
        </ScrollView>
        <View></View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 48,
    textAlign: "center",
    marginVertical: 20
  },
})

export default App;