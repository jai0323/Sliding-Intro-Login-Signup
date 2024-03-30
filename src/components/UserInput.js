import { StyleSheet, TextInput, View } from "react-native";
import { COLOR } from "../constants/theme";
import Icon from 'react-native-vector-icons/MaterialIcons'

function UserInput({placeholder, icon, password}) {
    
    return(
        <View style={styles.conatainer}>
            <Icon style={styles.icon} name={icon} size={20} color="black"/>
            <TextInput 
                style={styles.text} 
                placeholder={placeholder}
                secureTextEntry={password} 
                placeholderTextColor="lightgray"
                caretColor="red"
            />
        </View>
    )
}

export default UserInput;

const styles = StyleSheet.create({
    conatainer:{
        flexDirection: 'row',
        marginHorizontal: 30,
        backgroundColor: COLOR.textinput,
        borderRadius: 10,
        justifyContent:"space-evenly",
        alignItems:"center"
        
    },
    
    text:{
        color:'black',
        width:"80%"
    }

})