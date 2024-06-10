import {View, ImageBackground, StyleSheet} from "react-native";
import MCUSpiderMan from "./../assets/MCUSpiderMan.jpg"
const Card = () => {
    return (
        <View style={styles.card}>
            <ImageBackground source = {MCUSpiderMan} style={styles.imageBG} imageStyle={{borderRadius: 8}} resizeMode={"cover"}/>

        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#A71814",
        width: "80%",
        height: "60%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    imageBG: {
        width: "96%",
        height: "97%",
        marginLeft: "4%",
        marginTop: "5%",
    }
})

export default Card;