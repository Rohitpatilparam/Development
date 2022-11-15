import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const SujaSocialPost = ({ navigation }) => {
  const [socialPost, setSocialPost] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    navigation.navigate("SujaPreview", {
      social: `${socialPost}`,
      desc: `${description}`,
    });
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
          fontWeight: "bold",
          fontSize: 20,
          paddingLeft: 18,
          paddingTop: 5,
        }}
      >
        Social Post{" "}
      </Text>
      <Text
        style={{
          color: "rgba(0, 0, 0, 0.4)",
          paddingTop: 7,
          marginLeft: 18,
          fontSize: 12,
          fontWeight: "bold",
        }}
      >
        Social posts doesn't require any approval from admin and will be
        vissible under the social section on the home.
      </Text>
      <View
        style={{
          backgroundColor: "skyblue",
          borderRadius: 10,
          marginTop: 25,
          marginLeft: 14,
          marginRight: 14,
          height: 150,
        }}
      >
        <TextInput
          style={{
            borderRadius: 10,
            height: 42,
            fontWeight: "bold",
            fontSize: 18,
            borderColor: "#F9F9F9",
            borderWidth: 1.1,
            borderStyle: "dashed",
            marginTop: 38,
            paddingLeft: 15,
            marginLeft: 12,
            marginRight: 12,
          }}
          placeholder="Write Your Post"
          value={socialPost}
          onChangeText={(data) => setSocialPost(data)}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 30,
          }}
        >
          <Image source={require("../../assets/rect1.png")} />
          <Image source={require("../../assets/rect2.png")} />
          <Image source={require("../../assets/rect3.png")} />
          <Image source={require("../../assets/rect4.png")} />
          <Image source={require("../../assets/rect5.png")} />
          <Image source={require("../../assets/rect6.png")} />
          <Image source={require("../../assets/rect9.png")} />
          <Image source={require("../../assets/rect7.png")} />
          <Image source={require("../../assets/rect8.png")} />
        </View>
        <View
          style={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: 2,
            borderRadius: 8,
            height: 100,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 25,
            backgroundColor: "#F5F6FB",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 129,
            }}
            type="image"
            placeholder="Add Image"
          />
          <TouchableOpacity
            style={{
              borderRadius: 20,
              backgroundColor: "orange",
              alignItems: "center",
              width: 80,
              height: 19,
              marginLeft: 120,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 12,
              }}
            >
              Upload
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: 2,
            borderRadius: 5,
            height: 100,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 25,
            backgroundColor: "rgba(0, 0, 0, 0.01)",
          }}
        >
          <TextInput
            style={{
              paddingLeft: 10,
              paddingTop: 5,
              fontWeight: "bold",
              fontSize: 15,
            }}
            placeholder="Description"
            value={description}
            onChangeText={(data) => setDescription(data)}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => submit()}
        style={{
          height: 100,
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            marginTop: 280,
            marginRight: 20,
            color: "#fff",
            backgroundColor: "orange",
            height: 40,
            borderRadius: 20,
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

export default SujaSocialPost;
