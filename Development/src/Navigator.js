import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SamHome from "./screens/SamHome";
import SamLogin from "./screens/SamLogin";
import SamMemories from "./screens/SamMemories";
import SamPreview from "./screens/SamPreview";
import SamPost from "./screens/SamPost";
//import Home from "./screens/Home";
//import Login from "./screens/Login";
import SujaSocialPost from "./screens/SujaSocialPost";
import SujaPreviewPage from "./screens/SujaPreviewPage";
import SujaPost from "./screens/SujaPost";

const Navigator=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SamMemories"> 
                <Stack.Screen name="SamLogin" component={SamLogin} />
                <Stack.Screen name="SamHome" component={SamHome} />
                <Stack.Screen name="SamMemories" component={SamMemories} />
                <Stack.Screen name="SamPreview" component={SamPreview} />
                <Stack.Screen name="SamPost" component={SamPost} />
                <Stack.Screen name="SujaSocial" component={SujaSocialPost}/>
                <Stack.Screen name="SujaPreview" component={SujaPreviewPage}/>
                <Stack.Screen name="SujaPost" component={SujaPost}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;