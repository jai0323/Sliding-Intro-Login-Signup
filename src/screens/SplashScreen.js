import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLOR, SIZES } from "../constants/theme";
import CustomButton from "../components/CustomButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

const slides = [
    {
      id: 1,
      title: 'Quality',
      description:'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain. ',
      image: require('../assests/intro1.png'),
      color: '#5EA25F'
    },
    {
      id: 2,
      title: 'Convenient',
      description:'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
      image: require('../assests/intro2.png'),
      color: '#D5715B'
    },
    {
      id: 3,
      title: 'Local',
      description:'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time. ',
      image: require('../assests/intro3.png'),
      color: '#F8C569'
    }
  ]

function SplashScreen({showIntro}) {
    return(
        <AppIntroSlider
        data= {slides}
        renderItem={({ item })=> {
          return(
            <View style={[styles.introView, {backgroundColor:item.color}]}>
              <Image 
                source={ item.image }
                style={{
                  width:SIZES.width,
                  height:350 
                }}
                resizeMode="contain"
              />
              <View style={styles.infoCard}>
                <Text style={styles.heading}>{item.title}</Text>
                <Text style={styles.text}>{item.description}</Text>
                <View style={[styles.joinBtn,{backgroundColor:item.color}]}>
                    <CustomButton title={'Join the Movement!'}/>
                </View>
                <Pressable onPress={showIntro}>
                        <Text style={styles.loginBtn}>Login</Text>
                </Pressable>
              </View>
              
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLOR.text,
          width: 20,
          marginBottom:230,
          
        }}
        dotStyle={{
            marginBottom:230,
            backgroundColor: COLOR.text,
        }}

        showNextButton= {false}
      />
    )
}

export default SplashScreen;


const styles = StyleSheet.create({
    
    introView:{
      flex:1,
      alignItems: "center",
      paddingHorizontal: 15,
      paddingTop: 10,
    },
    infoCard:{
        width: SIZES.width,
        marginTop:10,
        backgroundColor:'#FFFFFF',
        borderTopLeftRadius:49,
        borderTopRightRadius:49,
        alignItems:'center',
        paddingTop:30,
        paddingHorizontal:50,
        height:SIZES.height - 350

    },
    heading:{
        fontSize: SIZES.h1,
        fontWeight:'bold',
        color:COLOR.title

    },
    text:{
        
        fontSize: SIZES.h6,
        fontWeight:'400',
        color:COLOR.text,
        paddingTop:20,
        textAlign:'center'
    },
    joinBtn:{
        borderRadius:50,
        width:236,
        height:60,
        alignItems:'center',
        justifyContent: 'center',
        marginTop:80
    },
    loginBtn:{
        color: COLOR.title,
        fontWeight: '500',
        fontSize: SIZES.h6,
        paddingTop: 20,
    }
  })