import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";


const Login =({navigation})=>{

    const submit =()=>{
        navigation.navigate("Home")
    };

    return(
        <TouchableOpacity onPress={()=>submit()}>
            <Text>Click Here</Text>
        </TouchableOpacity>
    );
}

export default Login;