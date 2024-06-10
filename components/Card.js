import {View, ImageBackground, StyleSheet, Text} from "react-native";
import MCUSpiderMan from "./../assets/MCUSpiderMan.jpg"
const Card = () => {
    return (
        <View style={styles.card}>
            <ImageBackground source = {MCUSpiderMan} style={styles.imageBG} resizeMode={"cover"}>
                <View style = {styles.cardTop}>
                    <Text style={styles.heading}>
                        MCU Spider-Man
                    </Text>
                </View>
                <View style = {styles.cardBottom}>
                    <Text style={styles.points}>
                        Points: +100
                    </Text>
                    <Text style = {styles.desc}>
                        The teenager who just can't catch a break. Well, at least we got Mr. Stark, right?
                    </Text>
                    <Text style = {styles.quote}>
                        "Mr. Stark...I don't feel so good..."
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "80%",
        height: "60%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    imageBG: {
        width: "100%",
        height: "100%",
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
        fontWeight: "900",
        fontSize: 24,
    },
    points: {
        fontWeight: "900",
        fontSize: 16,
    },
    desc: {

    },
    quote: {
        fontWeight: "500",

    }
})

export default Card;