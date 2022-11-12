import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SBEventPost from "./screens/SBEventPost";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SBTakeEvent from "./screens/SBTakeEvent";
import SBShowEvent from "./screens/SBShowEvent"

const Navigator=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SBEventPost"> 
                
                <Stack.Screen name="SBEventPost" component={SBEventPost}/>
                <Stack.Screen name="SBTakeEvent" component={SBTakeEvent}/>
                <Stack.Screen name="SBShowEvent" component={SBShowEvent}/>

                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;