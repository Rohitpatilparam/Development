import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";


const SamLogin =({navigation})=>{

    const submit =()=>{
        navigation.navigate("Social")
    };

    return(
        <TouchableOpacity onPress={()=>submit()}>
            <Text>Click Here</Text>
        </TouchableOpacity>
    );
}

export default SamLogin;