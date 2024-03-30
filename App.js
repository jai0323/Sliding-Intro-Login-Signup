import { useState } from "react";
import { Image, StyleSheet, Text, View, ViewBase } from "react-native";

import SplashScreen from "./src/screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}


function App() {
  const [showIntro, setShowIntro] = useState(false);

  function IntroScreenVisible(){
    setShowIntro(true);
  }

  if(!showIntro){
    return (
       <SplashScreen showIntro={IntroScreenVisible}/>
    )
  }

  return(
    
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  outterContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
 
})
