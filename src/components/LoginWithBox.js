import { StyleSheet, Text, View } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome'

function LoginWithBox({icon}) {
 return  <View style={styles.otherLoginBtn}>
    <View style={styles.container}>
    <Icon style={styles.icon} name="google" size={24} color="black"/>
    </View>
    <View style={styles.container}>
    <Icon style={styles.icon} name="apple" size={24} color="black"/>
    </View>
    <View style={styles.container}>
    <Icon style={styles.icon} name="facebook" size={24} color="black"/>
    </View>
 </View>
  
}

export default LoginWithBox

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 30,
        paddingHorizontal:30,
        paddingVertical:10,
        borderColor:"#DEDEDE",
        borderWidth:1,
    },
    otherLoginBtn:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
    }
   
})
