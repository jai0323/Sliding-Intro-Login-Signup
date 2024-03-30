import { StyleSheet, Text, View } from "react-native";
import { COLOR, SIZES } from "../constants/theme";

function ScreenHeading({name}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

export default ScreenHeading;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30
    },
    text:{
        color: COLOR.appName,
        fontWeight: 'bold',
        fontSize: SIZES.screenName
    }
})