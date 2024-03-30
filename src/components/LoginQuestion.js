import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR, SIZES } from "../constants/theme";

function LoginQuestion({question, onPress, btn}) {
    return(
        <View style={styles.conatainer}>
            <Text style={styles.questionTxt}>{question}</Text>
            <Pressable onPress={onPress}>
                <Text style={styles.btnTxt}>{btn}</Text>
            </Pressable>
        </View>
    )
}

export default LoginQuestion;

const styles = StyleSheet.create({
    conatainer:{
        flexDirection: 'row',
        marginTop:30,
        paddingHorizontal:30
    },
    questionTxt:{
        fontSize: SIZES.h6,
        fontWeight: '500',
        color: '#000000',
        opacity: 0.3
    },
    btnTxt:{
        paddingHorizontal: 5,
        color: COLOR.primary,
        fontSize: SIZES.h6,
        fontWeight: '500',
    }
})