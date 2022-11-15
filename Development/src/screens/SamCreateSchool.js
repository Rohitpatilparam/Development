import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import { Formik } from "formik";

const SamCreateSchool = ({route, navigation}) => {

    //console.log(route.params, "params")
    const profile = route.params
    //console.log(profile, "profile")

    return (
        <Formik
            initialValues={{
                instituteName: '',
                country: '',
                state: '',
                city: ''
            }}
            onSubmit = {(values) => {
                //console.log(values, "valuesSchool")
                let student = {...values, ...profile}
                navigation.navigate('SamNewBatch', student)
            }}
        >
            {({handleChange, handleSubmit, values}) => (
                <View style={{
                    height: '100%',
                    backgroundColor: '#F6F6FE',
                    paddingHorizontal: 16
                }}>
                    <View style={{
                        height: 64,
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../assets/arrow.png')} />
                    </View>
                    <View style={{height: 14}} />
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',   
                    }}>
                        Create Your School/College
                    </Text>
                    <View style={{height: 16}} />
                    <Text style={{
                        fontSize: 12,
                        color: '#363636'   
                    }}>
                        Provide us with the basis information about your school
                        that will help other to search your school in this app.
                    </Text>
                    <View style={{height: 24}} />
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../../assets/Logo.png')}
                            style={{height: 96, width: 96}}
                        />
                        <Image source={require('../../assets/camera.png')}
                            style={{
                                height: 32,
                                width: 32,
                                marginLeft: -20,
                                marginTop: 58
                            }}
                        />
                    </View>
                    <View style={{height: 24}}/>
                    <View style={{
                        height: 32,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            marginHorizontal: 14
                            }}
                            onChangeText= {handleChange('instituteName')}
                            value={values.instituteName}
                            placeholder= 'Name of the Institute'
                        />
                    </View>
                    <View style={{height: 24}}/>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#035C92'
                    }}>
                        Institute Address
                    </Text>
                    <View style={{height: 16}}/>
                    <View style={{
                        height: 32,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            marginHorizontal: 14
                            }}
                            onChangeText= {handleChange('country')}
                            value= {values.country}
                            placeholder= 'Country'
                        />
                    </View>
                    <View style={{height: 16}}/>
                    <View style={{
                        height: 32,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            marginHorizontal: 14
                            }}
                            onChangeText= {handleChange('state')}
                            value= {values.state}
                            placeholder= 'State'
                        />
                    </View>
                    <View style={{height: 16}}/>
                    <View style={{
                        height: 32,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <TextInput style={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            marginHorizontal: 14
                            }}
                            onChangeText= {handleChange('city')}
                            value= {values.city}
                            placeholder= 'City'
                        />
                    </View>
                    <View style={{height: 32}}/>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            borderRadius: 4,
                            backgroundColor: '#FF540B',
                            justifyContent: 'center'
                        }}
                        onPress={handleSubmit}
                    >
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: 'white',
                            alignSelf: 'center'
                        }}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity> 


                </View>
            )}
        </Formik>
    )
}

export default SamCreateSchool;