import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Button,
} from "react-native";
import axios from "axios";
import { useQuery } from "react-query";

const SujaPost = () => {
  const { data, isLoading } = useQuery("socialData", async () => {
    return await axios
      .get("http://192.168.118.92:3000/api/user/")
      .then((data) => data.data)
      .catch((e) => console.log(e, "e"));
  });
  console.log(data);

  // if(isLoading) {
  //   <ActivityIndicator></ActivityIndicator>
  // }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          color: "#fff",
        }}
      >
        <View>
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
              source={require("../../assets/arrow.png")}
            />
            <Text
              style={{
                paddingLeft: 18,
                marginTop: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Post
            </Text>
          </View>
          {data.response.length > 0 ? (
            <View>
              {data &&
                data.response.map((data) => (
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
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
                          paddingTop: 8,
                          paddingLeft: 10,
                          fontWeight: "bold",
                          fontSize: 15,
                          color: "#7D7F8B",
                        }}
                      >
                        John Deo posted a News
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          position: "relative",
                          left: 100,
                          color: "#9C9EA7",
                        }}
                      >
                        ...
                      </Text>
                    </View>
                    <Text
                      style={{
                        paddingLeft: 50,
                        color: "#7D7F8B",
                        fontSize: 12,
                        position: "absolute",
                        top: 66,
                        left: 5,
                      }}
                    >
                      12 mins ago
                    </Text>
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
                        {data.social}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 18,
                        marginRight: 18,
                      }}
                    >
                      <Text
                        style={{
                          color: "#7D7F8B",
                          fontSize: 14,
                          marginTop: 15,
                        }}
                      >
                        {data.desc}
                      </Text>
                      <Text
                        style={{
                          color: "#035C92",
                          marginTop: 5,
                        }}
                      >
                        @Nikhil Rawat, @Pratik Jaiswal
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 20,
                        height: 2,
                        backgroundColor: "#ababab",
                      }}
                    />
                  </View>
                ))}
            </View>
          ) : (
            <Text
              style={{
                flex: 1,
                marginTop: 200,
                marginLeft: 110,
                fontWeight: "bold",
                fontSize: 20,
                color: "red",
              }}
            >
              Data not found
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SujaPost;
