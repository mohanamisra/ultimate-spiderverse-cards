import {View, Text, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import Card from "./components/Card";
import MCUSpiderMan from "./assets/images/MCUSpiderMan.jpg"
import SpiderGwen from "./assets/images/spider-gwen.jpg"
import Miles from "./assets/images/miles.jpg"
import BagMan from "./assets/images/bagman.webp"
import BenScarlet from "./assets/images/benscarlet.webp"
import Noir from "./assets/images/noir.jpg"
import Superior from "./assets/images/otto.webp"
import Silk from "./assets/images/silk.webp"
import MayDay from "./assets/images/mayday.jpg"
import Spidey from "./assets/images/og.jpg"
import Venom from "./assets/images/venom.jpg"
import {useFonts} from 'expo-font'


import React from 'react';

const App = () => {

  const [fontsLoaded] = useFonts({
    "ComicFont": require("./assets/fonts/ComicFont.ttf"),
  })

  if(!fontsLoaded)
    return undefined;

  return (
      <SafeAreaView style = {styles.container}>
        <ScrollView style={{width: "100%"}} contentContainerStyle={{alignItems: "center", flexGrow: 1 }}>
          <Text style = {styles.heading}>The Ultimate SpiderVerse</Text>
          <Card charImage={Spidey} charPoints={"+100"}
                charName= {"Spider-Man"}
                charDesc={"Peter Parker was bit by a radioactive spider" +
                    " and...well. You know the rest."}
                charQuote={"Your friendly neighbourhood Spider-Man!"}/>
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
          <Card charImage={BenScarlet} charPoints={"+115"}
                charName= {"Scarlet Spider"}
                    charDesc={"Drummer by day. Vigilante by night. Doesn't" +
                        " do friends."}
                charQuote={"There has to be a Spider-Man out there. I'm just not sure which of us it should be!"}/>
          <Card charImage={Noir} charPoints={"+45"}
                charName= {"Spider-Man Noir"}
                    charDesc={"This one is an investigative reporter, and a" +
                        " jolly good one at that. Watch out, criminals!"}
                charQuote={"Say your prayers, Goblin. Here comes the Spider-Man!"}/>
          <Card charImage={Superior} charPoints={"+110"}
                charName= {"Superior Spider-Man"}
                    charDesc={"Post an unfortunate body-swap, Otto Octavius" +
                        " is now Spider-Man! Can he truly become the hero" +
                        " that Pete once was?"}
                charQuote={"You're all idiots."}/>
          <Card charImage={MayDay} charPoints={"+100"}
                charName= {"Spider-Girl (Mayday)"}
                    charDesc={"Peter's daughter. The apple doesn't fall far" +
                        " from the tree folks!"}
                charQuote={"No matter what pain or misery awaits me-- this is a Spider-Girl world!"}/>
          <Card charImage={Venom} charPoints={"+150"}
                charName= {"Venom"}
                    charDesc={"A symbiote from another planet wrecked" +
                        " quite the havoc. Peter defeated him" +
                        " before things got goopier."}
                charQuote={"It was fun while it lasted."}/>
          <Card charImage={Silk} charPoints={"+70"}
                charName= {"Silk"}
                charDesc={"Bitten by the same spider as Peter Parker, with enhanced senses and organic webbing."}
                charQuote={"I'm not Spider-Woman. I'm Silk"}/>
          <Card charImage={MCUSpiderMan} charPoints={"+100"} charName={"Spider-Man (MCU)"} charDesc={"The teenager who just can't catch a break. Well, at least we got Mr. Stark, right?"}
                charQuote={"Mr. Stark...I don't feel so good..."}/>

        </ScrollView>
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
    fontFamily: "ComicFont",
    fontSize: 42,
    textAlign: "center",
    marginVertical: 20,
    paddingTop: 20,
  },
})

export default App;