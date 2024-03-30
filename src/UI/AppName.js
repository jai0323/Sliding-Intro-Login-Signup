import { StyleSheet, Text, View } from "react-native";
import { COLOR, SIZES } from "../constants/theme";

function AppName() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>FarmerEats</Text>
        </View>
    )
}

export default AppName;

const styles = StyleSheet.create({
    container:{
        marginTop:36,
        paddingHorizontal:30,
    },
    text:{
        color: COLOR.appName,
        fontWeight: '500',
        fontSize:SIZES.h4
        
    }
})