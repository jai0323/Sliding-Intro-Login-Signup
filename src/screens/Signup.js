import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AppName from "../UI/AppName";
import ScreenHeading from "../components/ScreenHeading";
import LoginWithBox from "../components/LoginWithBox";
import UserInput from "../components/UserInput";
import { COLOR, SIZES } from "../constants/theme";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome6'

function Signup({navigation}){

    const [signupPage, setSignupPage] = useState('Welcome!');
    function nextPage() {
      if(signupPage == "Welcome!")
        setSignupPage("Farm Info");

    }

    return(
      <>
     <View style={styles.outterContainer}>
      <AppName/>
      <Text style={styles.pageCount}>Signup 1 of 4</Text>
      <View style={styles.heading}>
        <ScreenHeading name={signupPage}/>
      </View>

      { (signupPage == "Welcome!")
         &&
      <View style={styles.otherLoginBox}>
        <LoginWithBox />
      </View>
      }
      
      { (signupPage == "Welcome!")
         &&
        <View>
        <Text style={styles.loginOtherTxt}> or login with</Text>
        <View style={styles.input}>
              <UserInput  icon={'person-outline'} placeholder='Full Name'/>
        </View>
        <View style={styles.input}>
              <UserInput  icon={'alternate-email'} placeholder='Email Address'/>
        </View>
        <View style={styles.input}>
              <UserInput  icon={'phone'} placeholder='Email Address'/>
        </View>
        <View style={styles.input}>
              <UserInput  icon={'lock-outline'} placeholder='Password' password={true}/>
        </View>
        <View style={styles.input}>
              <UserInput  icon={'lock-outline'} placeholder='Re-enter Password' password={true}/>
        </View>
        </View>
      }
      
      { (signupPage == "Farm Info")
         &&

        <View>
          <View style={styles.input}>
              <UserInput  icon={'person'} placeholder='Business Name'/>
          </View>
          <View style={styles.input}>
                <UserInput  icon={'emoji-emotions'} placeholder='Informal Name '/>
          </View>
          <View style={styles.input}>
                <UserInput  icon={'home'} placeholder='Street Address'/>
          </View>
          <View style={styles.input}>
                <UserInput  icon={'location-pin'} placeholder='City'/>
          </View>
          <View style={styles.inputsInLine}>
            <View  style={styles.innerInputs1}>
              <TextInput 
                  style={styles.text} 
                  placeholder="State"
                  placeholderTextColor="lightgray"
                  caretColor="red"
              />
              
            </View>
            <View  style={styles.innerInputs2}>
              <TextInput 
                  style={styles.text} 
                  keyboardType="numeric"
                  placeholder="Enter Zipcode"
                  placeholderTextColor="lightgray"
                  caretColor="red"
              />
            </View>
          </View>
        </View>
      }
     </View>
      
      <View style={styles.btnBox}>
        {
          (signupPage == "Welcome!")
          &&
          <Pressable>
          <Text style={styles.loginBtn}>Login</Text>
          </Pressable>
        }
        {
          (signupPage != "Welcome!")
          &&
          <Pressable onPress={()=>{setSignupPage("Welcome!")}}>
            <Icon style={styles.icon} name='arrow-left-long' size={24} color="black"/>
          </Pressable>
        }
        <View style={[styles.CustomButton,{backgroundColor:COLOR.primary}]}>
            <CustomButton title={'Continue'} onPress={nextPage}/>
        </View>
      </View>
      </>
    )
}
export default Signup;


const styles = StyleSheet.create({
    outterContainer:{
      flex:1,
      backgroundColor: '#FFFFFF'
    },
    pageCount:{
      color: '#000000',
      opacity: 0.3,
      marginHorizontal:30,
      marginTop:40
    },
    heading:{
      marginTop:10
    },
    otherLoginBox:{
      marginTop:20
    },
    loginOtherTxt:{
      color:'#000000',
      opacity:0.3,
      textAlign:"center",
      paddingVertical: 20,
      fontWeight:'500'
  },
  input:{
    marginTop:15
  },
  inputsInLine:{
    marginTop:15,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  innerInputs1:{
    width:"35%",
    marginLeft: 30,
    backgroundColor: COLOR.textinput,
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingHorizontal: 5
  },
  innerInputs2:{
    width:"45%",
    marginRight: 30,
    backgroundColor: COLOR.textinput,
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingHorizontal:5


  },
  btnBox:{
    flex:0.12,
    flexDirection: 'row',
    justifyContent:"space-around",
    alignItems: "center",
    backgroundColor:"#FFFFFF"

  },
  loginBtn:{
    color: '#000000',
    fontSize: SIZES.h6,
    textDecorationLine:'underline',
    fontWeight:'500'
  },
  CustomButton:{
    borderRadius:50,
    alignItems:'center',
    justifyContent: 'center',
    height:50,
    width: '50%'
  },
  text:{
    color: '#000000'
  }
   
  })