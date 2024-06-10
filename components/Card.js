import {View, ImageBackground, StyleSheet} from "react-native";
import MCUSpiderMan from "./../assets/MCUSpiderMan.jpg"
const Card = () => {
    return (
        <View style={styles.card}>
            <ImageBackground source = {MCUSpiderMan} style={styles.imageBG} imageStyle={{borderRadius: 8, width: 100, height: 100}} resizeMode={'cover'}>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#A71814",
        width: "80%",
        height: "70%",
        borderRadius: 8,
        alignItems: "center",
    },
    imageBG: {
        borderRadius: 8,
    }
})

export default Card;