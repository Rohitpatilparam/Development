import React, {useState} from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Modal } from "react-native";
import { Formik } from "formik";
import { Calendar } from "react-native-calendars";

const SamCreateProfile = ({navigation}) => {

    const [showCal, setShowCal] = useState(false)
    const [calDate, setCalDate] = useState()

    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                dob: ''
            }}
            onSubmit = {(values) => {
                //console.log(values);
                navigation.navigate('SamCreateSchool', values)
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
                        Create Your Profile
                    </Text>
                    <View style={{height: 17}} />
                    <Text style={{
                        fontSize: 12,
                        color: '#363636'   
                    }}>
                        Please provide the basic details below to create your profile. 
                        Ensure that you provide genuine details as the same will be used for authentication purposes.
                    </Text>
                    <View style={{height: 24}} />
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{
                            height: 32,
                            width: '48%',
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
                                onChangeText= {handleChange('firstName')}
                                value= {values.firstName}
                                placeholder= 'First Name'
                            />
                        </View>
                        <View style={{width: 15}} />
                        <View style={{
                            height: 32,
                            width: '48%',
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
                                onChangeText= {handleChange('lastName')}
                                value= {values.lastName}
                                placeholder= 'Last Name'
                            />
                        </View>
                    </View>
                    <View style={{height: 24}} />
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
                            onChangeText= {handleChange('email')}
                            value= {values.email}
                            placeholder= 'Email Id'
                        />
                    </View>
                    <View style={{height: 24}} />
                    <View style={{flexDirection: 'row'}}>
                        <View style={{
                            height: 32,
                            width: 69,
                            backgroundColor: '#FFFFFF',
                            borderRadius: 4,
                            borderColor: '#D4D5D9',
                            borderWidth: 1,
                            justifyContent: 'center',
                            textAlign: 'left'
                        }}>
                            <Text style={{fontSize: 14, 
                                fontWeight: '300',
                                color: '#282C3F',
                                marginLeft: 14
                            }}>
                                91
                            </Text>
                        </View>   
                        <View style={{width: 16}}/>          
                        <View style={{
                            height: 32,
                            width: '76%',
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
                                onChangeText= {handleChange('phoneNo')}
                                value= {values.phoneNo}
                                placeholder= 'Phone Number'
                            />
                        </View>            
                    </View>
                    <View style={{height: 24}} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 32,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 4,
                        borderColor: '#D4D5D9',
                        borderWidth: 1,
                    }}>
                        <TouchableOpacity
                            onPress={()=>setShowCal(true)}
                            style={{paddingLeft: 15}}
                        >
                            <Image  style={{height: 16, width: 14}} 
                                source={require('../../assets/calender.png')}
                        />
                        </TouchableOpacity>
                        <TextInput style={{
                            justifyContent: 'center',
                            textAlign: 'left',
                            paddingLeft: 16
                            }}
                            onChangeText= {handleChange('dob')}
                            value= {values.dob}
                            placeholder= 'Date of Birth'
                        />
                    </View> 
                    {/* show Calender */}
                    <Modal 
                        animationType= 'fade'
                        visible={showCal}
                        style={{
                            display: "flex",
                            height: "100%",
                        }}
                    >
                        <Calendar style={{
                            borderRadius: 5, 
                            elevation: 4, 
                            margin: 40
                            }}
                            onDayPress={date=>{
                                // console.log(date);
                                setShowCal(false)
                                setCalDate(date.dateString)
                            }}
                        />
                    </Modal>
                    <View style={{height: 139}}/>
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={{
                            height: 40,
                            borderRadius: 4,
                            backgroundColor: '#FF540B',
                            justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: 'white',
                            alignSelf: 'center'
                        }}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity> 
                    <View style={{height: 47}}/>   
                    <Text style={{
                        fontSize: 14,
                        alignSelf: 'center',
                        color: '#E46D47',
                        textDecorationLine: 'underline'
                    }}>
                        Need Help?
                    </Text>      

                </View>
            )}
        </Formik>
    )
}

export default SamCreateProfile;