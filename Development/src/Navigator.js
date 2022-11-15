import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SBEventPost from "./screens/SBEventPost";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SBTakeEvent from "./screens/SBTakeEvent";
import SBShowEvent from "./screens/SBShowEvent"
import SujaSocialPost from "./screens/SujaSocialPost";
import SujaPreviewPage from "./screens/SujaPreviewPage";
import SujaPost from "./screens/SujaPost";
import SBCrePro from "./screens/SBCrePro";
import SBAddClg from "./screens/SBAddClg";
import SBAddBatch from "./screens/SBAddBatch";
import SBShowStudent from "./screens/SBShowStudent";

const Navigator=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SBCrePro"> 
                
                <Stack.Screen name="SBEventPost" component={SBEventPost}/>
                <Stack.Screen name="SBTakeEvent" component={SBTakeEvent}/>
                <Stack.Screen name="SBShowEvent" component={SBShowEvent}/>
                <Stack.Screen name="SujaSocial" component={SujaSocialPost}/>
                <Stack.Screen name="SujaPreview" component={SujaPreviewPage}/>
                <Stack.Screen name="SujaPost" component={SujaPost}/>
                <Stack.Screen name="SBCrePro" component={SBCrePro}/>
                <Stack.Screen name="SBAddClg" component={SBAddClg}/>
                <Stack.Screen name="SBAddBatch" component={SBAddBatch}/>
                <Stack.Screen name="SBShowStudent" component={SBShowStudent}/>

                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;