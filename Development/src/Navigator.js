import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
<<<<<<< HEAD
import SBEventPost from "./screens/SBEventPost";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SBTakeEvent from "./screens/SBTakeEvent";
import SBShowEvent from "./screens/SBShowEvent"
=======
//import Home from "./screens/Home";
//import Login from "./screens/Login";
import SujaSocialPost from "./screens/SujaSocialPost";
import SujaPreviewPage from "./screens/SujaPreviewPage";
import SujaPost from "./screens/SujaPost";
>>>>>>> f2884b508cc3733bfaf3a76643c133faa10cab33

const Navigator=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
<<<<<<< HEAD
            <Stack.Navigator initialRouteName="SBEventPost"> 
                
                <Stack.Screen name="SBEventPost" component={SBEventPost}/>
                <Stack.Screen name="SBTakeEvent" component={SBTakeEvent}/>
                <Stack.Screen name="SBShowEvent" component={SBShowEvent}/>

=======
            <Stack.Navigator initialRouteName="SujaSocial"> 
                <Stack.Screen name="SujaSocial" component={SujaSocialPost}/>
                <Stack.Screen name="SujaPreview" component={SujaPreviewPage}/>
                <Stack.Screen name="SujaPost" component={SujaPost}/>
>>>>>>> f2884b508cc3733bfaf3a76643c133faa10cab33
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;