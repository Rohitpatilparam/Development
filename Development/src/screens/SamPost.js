import React from "react";
import { View, Text, Image, ScrollView, ImageBackground, TextInput } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";

const SamPost = () => {

    const { data } = useQuery("memoriesData", async () => {
        return await axios.get("http://192.168.163.133:3000/api/user")
        .then((data) => (data.data))
        .catch((e) => e);
    });
    //console.log(data,"data")
    
    return (
        <ScrollView style={{
            height: '100%',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16
        }}>

            <View style={{
                height: 64,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source= {require('../../assets/arrow-left.png')} />
                    <View style={{width: 16}} />
                    <Text style={{
                        fontSize: 18,
                        color: '#282C3F'
                        }}>
                            Post
                    </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source= {require('../../assets/heart.png')} 
                        style={{width: 16, height: 14}}
                    />
                    <View style={{width: 16}} />
                    <Image source= {{uri: 'https://freeiconshop.com/wp-content/uploads/edd/share-flat.png'}} 
                        style={{width: 16, height: 16}}
                    />
                </View>
            </View> 

            {data && data.response.map((data) => {
                return(
                    <View key={data.id}>       
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../../assets/profile1.png')} 
                                    style={{width: 24, height: 24}}/>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#535665',
                                    fontWeight: '600',
                                    paddingLeft: 10
                                }}>
                                    Samir
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#535665',
                                    paddingLeft: 5
                                }}>
                                    posting a
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: '#E46D47',
                                    fontWeight: '600',
                                    paddingLeft: 5
                                }}>
                                    Memories
                                </Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                            <Image source={{uri: 'https://image.shutterstock.com/image-vector/instagram-menu-icon-vector-gradient-260nw-442224592.jpg'}} 
                                style={{width: 24, height: 24}}
                            />
                            </View>
                        </View>

                        <View style={{height: 12}} />
                        <ImageBackground style={{
                            height: 191,
                            width: '100%', 
                        }}
                            imageStyle= {{borderRadius: 12, resizeMode: 'cover' }}
                            source={require('../../assets/award.png')}
                        >
                            <Text style={{
                            fontSize: 20,
                            color: 'white',
                            paddingTop: 149,
                            fontWeight: '500',
                            alignSelf: 'center'
                            }}>
                                Lorem ipsum dolor sit amet
                            </Text>
                        </ImageBackground>

                        <View style={{height: 16}} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '300',
                            color: '#282C3F'
                        }}>
                            {data.description}
                        </Text>

                        <View style={{height: 16}} />
                        <Text style={{
                            fontSize: 14,
                            color: '#035C92',
                            textAlign: 'left'
                        }}>
                            @Adinath Patil, @Chetan Adamapure    
                        </Text>

                        <View style={{height: 24}} />
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <Image source={require('../../assets/profile1.png')} 
                                style={{width: 24, height: 24}}
                            />
                            <Image source={require('../../assets/profile2.png')} 
                                style={{width: 24, height: 24}}
                            />
                            <Image source={require('../../assets/profile3.png')} 
                                style={{width: 24, height: 24}}
                            />
                            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/7543/7543132.png'}} 
                                style={{width: 24, height: 24}}
                            />
                            <Text style={{
                                fontSize: 14,
                                color: '#535665',
                                paddingLeft: 8
                            }}>
                                and 8 others liked this post
                            </Text>
                        </View>
                        
                        <View style={{height: 25}} />
                        <View style={{height: 1, backgroundColor: '#D4D5D9'}} />

                        <Text style={{fontSize: 18, fontWeight: '600', paddingTop: 25}}>
                            3 Comments
                        </Text>
                        <View style={{height: 1, backgroundColor: '#D4D5D9'}} />

                        <View style={{height: 12}} />
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image source={require('../../assets/camera.png')} />
                            <View style={{width: 16}}/>
                            <View style={{
                                height: 32,
                                width: '83%',
                                borderWidth: 1,
                                borderColor: '#D4D5D9',
                                borderRadius: 16,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 14
                            }}>
                                <TextInput
                                    placeholder="Write your Comment..."
                                    style={{
                                        fontSize: 14,
                                        color: '#282C3F'
                                    }} 
                                />
                                <Image source={require('../../assets/smile.png')} 
                                    style={{height: 16, width: 16}}
                                />
                            </View>
                        </View>

                        <View style={{height: 12}} />
                        <View style={{height: 1, backgroundColor: '#D4D5D9'}} /> 
                        <View style={{height: 15}} />
                    </View>
                );
            })}
        </ScrollView>
    )
}

export default SamPost;