import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import { Formik } from "formik";
import axios from "axios";

const SamNewBatch = ({route, navigation}) => {

    //console.log(route.params.profile, "createprofile")
    //console.log(profile, "prof")
    //console.log(route.params, "createschool")
    const school = route.params
    //console.log(school, "CreateSchool")

    return (
        <Formik
            initialValues={{
                batchGroup: '',
                joinClass: '',
                joinYear: '',
                passoutClass: '',
                passoutYear: ''
            }}
            onSubmit = {(values) => {
                //console.log(values, "batchvalues")
                let AllInfo = {...values, ...school}
                //console.log(AllInfo, "Info")

                axios.post('http://192.168.30.133:3000/api/school/create', AllInfo)
                .then((response) => console.log(response.data, "info"))
                .catch((e) => (e?.response))
                //console.log(response.data)
                navigation.navigate('SamInfoPage')
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
                    <View style={{height: 6}} />
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '600',   
                    }}>
                        Request a New Batch
                    </Text>
                    <View style={{height: 24}}/>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#035C92'
                    }}>
                        Your School
                    </Text>
                    <View style={{height: 19}}/>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/SchoolLogo.png')}
                            style={{width: 18, height: 24}}
                        />
                        <View style={{width: 15}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: '#282C3F',
                            
                        }}>
                            SAINIK SCHOOL, PUNE
                        </Text>
                    </View>
                    <View style={{height: 24}}/>
                    <Text style={{
                        fontSize: 12,
                        color: '#363636'   
                    }}>
                        Your school has multiple batch structure,
                        please select batch structure that you belong to.
                    </Text>
                    <View style={{height: 29}}/>
                    <View style={{
                        height: 36,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <Text style={{
                            fontSize: 10,
                            color: '#035C92',
                            paddingLeft: 12,
                            marginTop: -8
                        }}>
                            Batch Group
                        </Text>
                        <TextInput style={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            paddingHorizontal: 12,
                            paddingBottom: 10
                            }}
                            onChangeText= {handleChange('batchGroup')}
                            value= {values.batchGroup}
                            placeholder= 'Secondary Education (Nursery - class 10)'
                        />
                    </View>
                    <View style={{height: 24}}/>
                    <Text style={{
                        fontSize: 12,
                        color: '#363636'
                    }}>
                        Provide Your batch details.
                    </Text>
                    <View style={{height: 21}}/>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 36,
                            width: '48%',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 4,
                            borderColor: '#D4D5D9',
                            borderWidth: 1,
                        }}>
                            <Text style={{
                                fontSize: 10,
                                color: '#035C92',
                                paddingLeft: 12,
                                marginTop: -8
                            }}>
                                Your Joining Class
                            </Text>
                            <TextInput style={{
                                justifyContent: 'center',
                                textAlign: 'left',
                                paddingHorizontal: 12,
                                paddingBottom: 10
                                }}
                                onChangeText= {handleChange('joinClass')}
                                value= {values.joinClass}
                                placeholder= 'Class 1'
                            />
                        </View>
                        <View style={{width: 16}}/>
                        <View style={{
                            height: 36,
                            width: '48%',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 4,
                            borderColor: '#D4D5D9',
                            borderWidth: 1,
                        }}>
                            <Text style={{
                                fontSize: 10,
                                color: '#035C92',
                                paddingLeft: 12,
                                marginTop: -8
                            }}>
                                Joining Year
                            </Text>
                            <TextInput style={{
                                justifyContent: 'center',
                                textAlign: 'left',
                                paddingHorizontal: 12,
                                paddingBottom: 10
                                }}
                                onChangeText= {handleChange('joinYear')}
                                value= {values.joinYear}
                                placeholder= '1993-94'
                            />
                        </View>
                    </View>
                    <View style={{height: 21}}/>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <View style={{
                            height: 36,
                            width: '48%',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 4,
                            borderColor: '#D4D5D9',
                            borderWidth: 1,
                        }}>
                            <Text style={{
                                fontSize: 10,
                                color: '#035C92',
                                paddingLeft: 12,
                                marginTop: -8
                            }}>
                                Your Last Passout Class
                            </Text>
                            <TextInput style={{
                                justifyContent: 'center',
                                textAlign: 'left',
                                paddingHorizontal: 12,
                                paddingBottom: 10
                                }}
                                onChangeText= {handleChange('passoutClass')}
                                value= {values.passoutClass}
                                placeholder= 'Class 10'
                            />
                        </View>
                        <View style={{width: 16}}/>
                        <View style={{
                            height: 36,
                            width: '48%',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 4,
                            borderColor: '#D4D5D9',
                            borderWidth: 1,
                        }}>
                            <Text style={{
                                fontSize: 10,
                                color: '#035C92',
                                paddingLeft: 12,
                                marginTop: -8
                            }}>
                                Passout Year
                            </Text>
                            <TextInput style={{
                                justifyContent: 'center',
                                textAlign: 'left',
                                paddingHorizontal: 12,
                                paddingBottom: 10
                                }}
                                onChangeText= {handleChange('passoutYear')}
                                value= {values.passoutYear}
                                placeholder= '2004-05'
                            />
                        </View>
                    </View>
                    <View style={{height: 24}}/>
                    <View style={{height: 1, backgroundColor: '#EAEAEC'}} />
                    <View style={{height: 24}}/>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#035C92'
                    }}>
                        Your Batch
                    </Text>
                    <View style={{height: 14}}/>
                    <Text style={{
                        fontSize: 12,
                        color: '#363636'   
                    }}>
                        Based on your selection your batch should be:
                    </Text>
                    <View style={{height: 16}}/>
                    <Text style={{fontSize: 24}}>
                        Batch of 1991-2005
                    </Text>
                    <View style={{height: 35}}/>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            borderRadius: 4,
                            backgroundColor: '#FF540B',
                            justifyContent: 'center'
                        }}
                        onPress= {handleSubmit}
                    >
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: 'white',
                            alignSelf: 'center'
                        }}>
                            Proceed to Confirm
                        </Text>
                    </TouchableOpacity>


                </View>
            )}
        </Formik>
    )
}

export default SamNewBatch;