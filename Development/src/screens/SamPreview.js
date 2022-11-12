import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import axios from "axios";


const SamPreview = ({ route, navigation }) => {

    //console.log(route.params, "params");
    const description  = route.params.values.description;
    //console.log(desc, "params");

    const submit = async() => {
        //console.log(description, "desc");
        await axios.post("http://192.168.163.133:3000/api/user/create", {description: description})

        .then((response) => (response.data)) 
        .catch((e) => console.log(e?.response, "error"))
        
        navigation.navigate('SamPost')
    }

    return (
        <View style={{
            height: '100%',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16
        }}>

            <View style={{
                height: 64,
                backgroundColor: 'white',
                justifyContent: 'center'
            }}>
                <Image source= {require('../../assets/arrow-left.png')} />
            </View> 

            <Text style={{
                fontSize: 24,
                fontWeight: '600',   
            }} >
                Preview
            </Text>

            <View style={{height: 17}} />
            <View style={{
                flexDirection: 'row'
            }}>
                <Image source={require('../../assets/profile1.png')} 
                    style={{width: 24, height: 24}}/>
                <Text style={{
                    fontSize: 14,
                    color: '#535665',
                    fontWeight: '600',
                    paddingLeft: 10
                }}>
                    John Doe
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#535665',
                    paddingLeft: 5
                }}>
                    posting a new
                </Text>
                <Text style={{
                    fontSize: 14,
                    color: '#E46D47',
                    fontWeight: '600',
                    paddingLeft: 5
                }}>
                    Memories Update
                </Text>
            </View>

            <View style={{height: 24}} />
            <ImageBackground style={{
                height: 267,
                width: '100%', 
            }}
                imageStyle= {{borderRadius: 12, resizeMode: 'cover' }}
                source={require('../../assets/award.png')}
            >
                <Text style={{
                fontSize: 20,
                color: 'white',
                paddingTop: 225,
                fontWeight: '500',
                alignSelf: 'center'
                }}>
                    Lorem ipsum dolor sit amet
                </Text>
            </ImageBackground>

            <View style={{height: 24}} />
            <Text style={{
                fontSize: 14,
                fontWeight: '300',
                color: '#282C3F'
            }}>
                {description}
            </Text>
                
            <View style={{height: 10}} />
            <Text style={{
                fontSize: 14,
                color: '#035C92',
                textAlign: 'left'
            }}>
                @Adinath Patil, @Chetan Adamapure    
            </Text>

            <View style={{height: 24}} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 12,
                    color: '#7D7F8B'
                }}>
                    Who all can see this post
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: 'https://thumbs.dreamstime.com/b/globe-symbol-icon-orange-simple-isolated-vector-illustration-137966603.jpg'}} 
                        style={{width: 15, height: 15}}    
                    />
                    <Text style={{
                        fontSize: 12,
                        color: '#E46D47',
                        paddingLeft: 6,
                        paddingRight: 9,
                        textDecorationLine: 'underline'
                    }}>
                        Public
                    </Text>
                    <Image style={{width: 15, height: 15}}
                        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUOiCt4AFQ17wQCtOaJYFTJx6ko9Aq_UYZw&usqp=CAU'}}
                    />
                </View>
            </View>

            <View style={{height: 40}} />
            <TouchableOpacity 
                onPress={() => submit()}
                style={{
                height: 40,
                borderRadius: 20,
                backgroundColor: '#FF540B',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: 'white',
                    alignSelf: 'center'
                }}>
                    Submit Post
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default SamPreview;