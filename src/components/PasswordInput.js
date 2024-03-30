import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { COLOR } from "../constants/theme";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
function PasswordInput({placeholder, icon}) {
    return(
        <View style={styles.conatainer}>
            <Icon name={icon} size={18} color="black"/>
            <TextInput 
                style={styles.text} 
                placeholder={placeholder}
                secureTextEntry={true} 
                placeholderTextColor="lightgray"
                caretColor="red"
            />
            <Pressable style={styles.btn}>
                <Text style={styles.btntxt}>Forget?</Text>
            </Pressable>
        </View>
    )
}

export default PasswordInput;

const styles = StyleSheet.create({
    conatainer:{
        flexDirection: 'row',
        marginHorizontal: 30,
        backgroundColor: COLOR.textinput,
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    text:{
        color:'black',
        width:"60%"
    },
    btntxt:{
        
        color:COLOR.primary,
    }

})