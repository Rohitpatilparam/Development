import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Formik } from "formik";
// import { LinearGradient } from "react-native-linear-gradient";

const SamMemories = ({navigation}) => {

    return (
        <Formik
            initialValues={{description: ''}}
            onSubmit = {(values) => {
                //console.log(values)
                navigation.navigate('SamPreview', {values: values})
            }}
        >
            {({handleChange, handleSubmit, values}) => (
                <View style={{
                    height: '100%',
                    backgroundColor: '#FFFFFF',
                    paddingHorizontal: 16
                }}>
                    {/* <LinearGradient colors={['(180deg, #F5FAFC 0%, #FFFFFF 100%)', 'transparent']}>
                    </LinearGradient> */}
                    <View style={{
                        height: 64,
                        backgroundColor: 'white',
                        paddingTop: 32,
                    }}>
                        <Image source= {require('../../assets/arrow-left.png')} />
                    </View>

                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',   
                    }} >
                        Memories
                    </Text>

                    <View style={{height: 16}} />
                    <Text>
                        Post your old days photos and video and cherish those memories with your friends
                    </Text>

                    <View style={{height: 24}} />
                    <View style={{
                        height: 80,
                        backgroundColor: '#F5F6FB',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 2,
                        alignItems: 'center'
                    }}>
                        <View style={{height: 12}} />
                        <Image style={{width: 19, height: 15}}
                            source= {require('../../assets/photo.png')} 
                        />
                        <Text style={{
                            paddingTop: 8,
                            paddingBottom: 5,
                            textAlign: 'center',
                            fontSize: 10,
                            color: '#858792',
                        }}>
                            Add Images / Videos
                        </Text>

                        <TouchableOpacity style={{
                            width: 76,
                            height: 17,
                            borderRadius: 20,
                            backgroundColor: '#E46D47',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 8,
                                color: 'white',
                                textAlign: 'center',
                            }}>Upload</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height: 24}} />
                
                    <View style={{
                        width: '100%',
                        height: 105,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <Text style={{
                            paddingTop: 8,
                            paddingLeft: 14,
                            fontSize: 14,
                            color: '#282C3F'
                            }}>
                                Description
                        </Text>
                        <TextInput 
                            onChangeText={handleChange('description')}
                            value={values.description}
                            multiline={true}
                            numberOfLines={4}
                            style={{
                                paddingTop: 3,
                                paddingLeft: 14,
                                fontSize: 14,
                                color: '#282C3F'
                            }} 
                        />
                    </View>

                    <View style={{height: 24}} />
                    <View style={{
                        height: 32,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 14,
                            color: '#282C3F'
                        }}>
                            Tag more
                        </Text>
                        <Image source={{uri: 'https://t4.ftcdn.net/jpg/05/24/29/65/360_F_524296540_ZQnhHIfaNqhxZiNjpDzYfPX57amSaWiX.jpg'}} 
                            style={{width: 25, height: 25}}
                        />
                    </View>  

                    <View style={{height: 16}} />   
                    <Text style={{
                        fontSize: 14,
                        color: '#035C92',
                        textAlign: 'left'
                    }}>
                        Adinath Patil, Chetan Adamapure    
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

                    <View style={{height: 87}} />
                    <TouchableOpacity 
                        onPress={handleSubmit}
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
            )}
        </Formik>
    )
}

export default SamMemories;

