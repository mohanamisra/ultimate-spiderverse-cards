import {View, Text, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import Card from "./components/Card";
import MCUSpiderMan from "./assets/MCUSpiderMan.jpg"
import SpiderGwen from "./assets/spider-gwen.jpg"
import Miles from "./assets/miles.jpg"
import BagMan from "./assets/bagman.webp"
import BenScarlet from "./assets/benscarlet.webp"

import React from 'react';

const App = () => {

  return (
      <SafeAreaView style = {styles.container}>
        <ScrollView style={{width: "100%"}} contentContainerStyle={{alignItems: "center", flexGrow: 1 }}>
          <Text style = {styles.heading}>The Ultimate SpiderVerse</Text>
          <Card charImage={MCUSpiderMan} charPoints={"+100"} charName={"MCU" +
              " Spider-Man"} charDesc={"The teenager who just can't catch a break. Well, at least we got Mr. Stark, right?"}
                charQuote={"Mr. Stark...I don't feel so good..."}/>
          <Card charImage={SpiderGwen} charPoints={"+70"}
                charName= {"Spider-Gwen"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"Wanna get out of here?"}/>
          <Card charImage={Miles} charPoints={"+90"}
                charName= {"Miles Morales"}
                    charDesc={"A young spider-boy from Brooklyn, carrying on" +
                        " Peter Parker's legacy."}
                charQuote={"Nah...Imma do my own thing."}/>
          <Card charImage={BagMan} charPoints={"+45"}
                charName= {"Bombastic Bag-Man"}
                    charDesc={"Don't let that bag fool you. That really is" +
                        " Spider-Man!"}
                charQuote={"Hey, I'm actually Spider-Man in this bag."}/>
          <Card charImage={BenScarlet} charPoints={"+70"}
                charName= {"Scarlet Spider"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"There has to be a Spider-Man out there. I'm just not sure which of us it should be!"}/>
          <Card charImage={SpiderGwen} charPoints={"+70"}
                charName= {"Spider-Gwen"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"Wanna get out of here?"}/>
          <Card charImage={SpiderGwen} charPoints={"+70"}
                charName= {"Spider-Gwen"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"Wanna get out of here?"}/>
          <Card charImage={SpiderGwen} charPoints={"+70"}
                charName= {"Spider-Gwen"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"Wanna get out of here?"}/>
          <Card charImage={SpiderGwen} charPoints={"+70"}
                charName= {"Spider-Gwen"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"Wanna get out of here?"}/>
          <Card charImage={SpiderGwen} charPoints={"+70"}
                charName= {"Spider-Gwen"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"Wanna get out of here?"}/>
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