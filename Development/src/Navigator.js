import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SamCreateProfile from "./screens/SamCreateProfile";
import SamCreateSchool from "./screens/SamCreateSchool";
import SamNewBatch from "./screens/SamNewBatch";
import SamInfoPage from "./screens/SamInfoPage";

const Navigator=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SamCreateProfile"> 
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="SamCreateProfile" component={SamCreateProfile}/>
                <Stack.Screen name="SamCreateSchool" component={SamCreateSchool}/>
                <Stack.Screen name="SamNewBatch" component={SamNewBatch}/>
                <Stack.Screen name="SamInfoPage" component={SamInfoPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;