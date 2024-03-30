import { StyleSheet, Text, View } from "react-native";
import AppName from "../UI/AppName";
import ScreenHeading from "../components/ScreenHeading";
import LoginQuestion from "../components/LoginQuestion";
import UserInput from "../components/UserInput";
import PasswordInput from "../components/PasswordInput";
import CustomButton from "../components/CustomButton";
import { COLOR } from "../constants/theme";
import LoginWithBox from "../components/LoginWithBox";

function Login({navigation}) {

function gotoSignUp(){
    navigation.navigate('Signup');
}

return (
    <View style={styles.outterContainer}>
        <AppName/>
        <View style={styles.heading}>
            <ScreenHeading name={"Welcome back!"}/>
        </View>
        <LoginQuestion question={'New here?'} btn={'Create account'} onPress={gotoSignUp} />
        <View style={styles.email}>
            <UserInput  icon={'alternate-email'} placeholder='Email Address'/>
        </View>
        <View style={styles.password}>
            <PasswordInput  icon={'lock-outline'} placeholder='Password'/>
        </View>
        <View style={[styles.loginBtn,{backgroundColor:COLOR.primary}]}>
            <CustomButton title={'Login'}/>
        </View>
        <Text style={styles.loginOtherTxt}> or login with</Text>
        <LoginWithBox />
            
    </View>
)
}
export default Login;


const styles = StyleSheet.create({
    outterContainer:{
      flex:1,
      backgroundColor: '#FFFFFF'
    },
    heading:{
        marginTop:100
    },
    email:{
       marginTop:50
    },
    password:{
        marginTop:20
    },
    loginBtn:{
        borderRadius:50,
        marginHorizontal:30,
        alignItems:'center',
        justifyContent: 'center',
        marginTop:30,
        height:50
    },
    loginOtherTxt:{
        color:'#000000',
        opacity:0.3,
        textAlign:"center",
        paddingVertical: 30,
        fontWeight:'500'
    },
    
  })
  