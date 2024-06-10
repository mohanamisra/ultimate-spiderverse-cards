import {View, ImageBackground, StyleSheet, Text, Image} from "react-native";
import {useFonts} from "expo-font";
import logo from "../assets/spideylogo.png"

const Card = ({charImage, charName, charPoints, charDesc, charQuote}) => {
    const [fontsLoaded] = useFonts({
        "ComicFont": require("../assets/fonts/ComicFont.ttf"),
    })

    if(!fontsLoaded)
        return undefined;


    return (
        <View style={styles.card}>
            <ImageBackground source = {charImage} style={styles.imageBG} resizeMode={"cover"}>
                <View style = {styles.cardTop}>
                    <View style={{flexDirection:"row", alignItems: "center", width: "85%"}}>
                        <Image source={logo} style={{width: 40, height: 40,}}/>
                            <Text style={styles.heading}>
                                {charName}
                            </Text>
                        <Image source={logo} style={{width: 40, height: 40, transform: [{rotateY: '180deg'}]}}/>
                    </View>
                </View>
                <View style = {styles.cardBottom}>
                    <Text style={styles.points}>
                        Points: {charPoints}
                    </Text>
                    <Text style = {styles.desc}>
                        {charDesc}
                    </Text>
                    <Text style = {styles.quote}>
                        "{charQuote}"
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "80%",
        height: 600,
        borderRadius: 8,
    },
    imageBG: {
        width: "100%",
        height: 550,
        overflow: "hidden",
        borderTopColor: "#A71814",
        borderBottomColor: "#A71814",
        borderLeftColor: "#283278",
        borderRightColor: "#283278",
        borderWidth: 8,
        borderTopWidth: 10,
        borderBottomWidth: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardTop: {
        backgroundColor: "#fff8e5",
        opacity: 0.9,
        marginTop: 5,
        borderRadius: 2,
        paddingHorizontal: 10,
    },
    cardBottom: {
        backgroundColor: "#fff8e5",
        opacity: 0.9,
        marginBottom: 10,
        borderRadius: 8,
        padding: 10,
        width: "95%",
        gap: 5,
    },
    heading: {
        fontFamily: "ComicFont",
        fontSize: 24,
        textAlign: "center",
        marginHorizontal: 10,
        padding: 10
    },
    points: {
        fontWeight: "900",
        fontSize: 16,
    },
    desc: {

    },
    quote: {
        fontWeight: "500",
        fontStyle: "italic"
    }
})

export default Card;