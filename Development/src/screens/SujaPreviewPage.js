import React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const SujaPreviewPage = ({ route, navigation }) => {
  const { social } = route.params;
  const { desc } = route.params;

  const submit = async (data) => {
    console.log(data, "data");
    await axios
      .post("http://192.168.118.92:3000/api/user/add", { social, desc })
      .then((res) => console.log(res?.response, "res"))
      .catch((e) => console.log(e?.response, "e"));

    navigation.navigate("SujaPost");
  };

  return (
    <View>
      <Image
        style={{
          marginLeft: 20,
          marginTop: 10,
        }}
        source={require("../../assets/arrow.png")}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 15,
        }}
      >
        Preview
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            marginLeft: 20,
            marginTop: 10,
          }}
          source={require("../../assets/user.png")}
        />

        <Text
          style={{
            color: "rgba(0, 0, 0, 0.5)",
            fontWeight: "bold",
            paddingLeft: 5,
            paddingTop: 12,
          }}
        >
          John Deo posting a News Update
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <Image
          style={{
            width: 325,
            height: 247,
            borderRadius: 10,
          }}
          source={require("../../assets/img.png")}
        />
        <Text
          style={{
            position: "absolute",
            top: 200,
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            left: 30,
          }}
        >
          {social}
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 15,
          color: "rgba(0, 0, 0, 0.5)",
          fontSize: 15,
        }}
      >
        {desc}
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          color: "#035C92",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        @Nikhil Rawat, @Pratik Jaiswal
      </Text>

      <TouchableOpacity
        onPress={() => submit()}
        style={{
          height: 100,
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            marginTop: 20,
            marginRight: 20,
            color: "#fff",
            backgroundColor: "orange",
            height: 40,
            borderRadius: 20,
            opacity: 1,
            paddingLeft: 120,
            paddingTop: 10,
          }}
        >
          Submit Post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SujaPreviewPage;
