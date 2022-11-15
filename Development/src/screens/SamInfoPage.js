import React from "react";
import { ScrollView, ImageBackground, View, Text, Image } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";

const SamInfoPage = () => {

    const { data } = useQuery("studentData", async () => {
        return await axios.get("http://192.168.30.133:3000/api/school")
        .then((data) => (data.data))
        .catch((e) => e);
    });
    console.log(data,"allinfo")

    return(
        <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
            {data && data.response.map((data) => {
                return(
                    <View key={data._id}>        
                        <ImageBackground style={{
                            height: 360,
                            width: '100%', 
                        }}
                            imageStyle= {{ resizeMode: 'cover' }}
                            source={require('../../assets/Profile-img.png')}
                        >
                            <View style={{
                                paddingLeft: 16,
                                paddingTop: 32
                            }}>
                                <Image source={require('../../assets/arrow.png')} 
                                    style={{width:16, height: 16}}
                                />
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: 16, justifyContent: 'flex-end' }}>
                                <Text style={{
                                    fontSize: 24,
                                    color: 'white',
                                    fontWeight: '600'
                                }}>
                                    {data.firstName}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'white',
                                    paddingTop: 4,
                                    paddingBottom: 20
                                }}>
                                    Engineer . {data.city}
                                </Text>
                                <View style={{
                                    flexDirection: 'row'    
                                }}>
                                    <View style={{
                                        height: 32,
                                        width: 134,
                                        backgroundColor: '#FF540B',
                                        borderRadius: 20,
                                        marginTop: -8,
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                            color: 'white',
                                            textAlign: 'center'
                                        }}>
                                            EDIT PROFILE
                                        </Text>
                                    </View>
                                    <View style={{width: 16}}/>
                                    <View style={{
                                        height: 32,
                                        width: 134,
                                        backgroundColor: '#0FA3D7',
                                        borderRadius: 20,
                                        marginTop: -8,
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                            color: 'white',
                                            textAlign: 'center'
                                        }}>
                                            VEIW AS USER
                                        </Text>
                                    </View>
                                </View>
                                <View style={{height: 16}}/>
                            </View>
                        </ImageBackground>
                        <View style={{
                            height: 60,
                            backgroundColor: '#EE4444'
                        }}>
                            
                            <View style={{flexDirection: 'row'}}>
                                <View style={{width: 40}}/>
                                <Text style={{color: 'white', fontWeight: '500', fontSize: 16, alignSelf: 'center', paddingTop: 12}}>
                                    75%
                                </Text>
                                <View style={{width: 16}}/>
                                <View style={{alignItems: 'center', paddingTop: 12}}>
                                    <Text style={{color: 'white', fontSize: 12}}>
                                        Your profile is only 25% incomplete
                                    </Text>
                                    <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
                                        Complete Your Profile Now 
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            height: 45,
                            backgroundColor: '#F8FBFD',
                            flexDirection: 'row',
                        }}>
                            <View style={{width: 24}}/>
                            <Text style={{
                                fontSize: 12, 
                                color: '#282C3F',
                                alignSelf: 'center'  
                            }}>
                                37 Posts
                            </Text>
                            <View style={{width: 24}}/>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600', 
                                color: '#E46D47',
                                alignSelf: 'center'  
                            }}>
                                About & Contact
                            </Text>
                        </View>
                        <View style={{height: 24}}/>
                        <View style={{ paddingHorizontal: 16}}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '600', 
                                color: '#035C92' 
                            }}>
                                About {data.firstName}:
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#535665' 
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin at urna at ornare. 
                                Mauris blandit mattis tortor, sit amet luctus elit mattis vitae.
                            </Text>
                        </View>
                        <View style={{height: 24}} />
                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 16,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '700',
                                color: '#7D7F8B'
                            }}>
                                Job & Education
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={{uri: 'https://thumbs.dreamstime.com/b/globe-symbol-icon-orange-simple-isolated-vector-illustration-137966603.jpg'}} 
                                    style={{width: 16, height: 16}}    
                                />
                                <Text style={{
                                    fontSize: 14,
                                    color: '#E46D47',
                                    paddingLeft: 6,
                                    paddingRight: 9,
                                    textDecorationLine: 'underline'
                                }}>
                                    Public
                                </Text>
                                <Image style={{width: 16, height: 16}}
                                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUOiCt4AFQ17wQCtOaJYFTJx6ko9Aq_UYZw&usqp=CAU'}}
                                />
                            </View>
                        </View>  
                        <View style={{height: 26}} />                      
                        <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#035C92',
                                paddingRight: 50
                            }}>
                                Current
                            </Text>
                            <Image source={require('../../assets/Logo.png')}
                                style={{width: 32, height: 32}}
                            />
                            <View style={{flexDirection: 'column', paddingLeft: 20}}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    ParamLogic InfoTech, Pune
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    Engineer, IT
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    May 2022 - Till date
                                </Text>
                            </View>
                            
                        </View>
                        <View style={{height: 16}} />                      
                        <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#035C92',
                                paddingRight: 30
                            }}>
                                2010-2013
                            </Text>
                            <Image source={require('../../assets/Logo.png')}
                                style={{width: 32, height: 32}}
                            />
                            <View style={{flexDirection: 'column', paddingLeft: 20}}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    Shivaji College, {data.city}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    Bachelors of Computer
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    Batch: 2010-2013
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#87B70D',
                                    paddingRight: 31
                                }}>
                                    Verified
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 16}} />                      
                        <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#035C92',
                                paddingRight: 30
                            }}>
                                {data.joinYear}
                            </Text>
                            <Image source={require('../../assets/Logo.png')}
                                style={{width: 32, height: 32}}
                            />
                            <View style={{flexDirection: 'column', paddingLeft: 20}}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    {data.instituteName}, {data.city}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    {data.batchGroup} ({data.joinClass})
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#FD9938',
                                    paddingRight: 31
                                }}>
                                    Pending Approval
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 16}} />                      
                        <View style={{flexDirection: 'row', paddingHorizontal: 16}}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#035C92',
                                paddingRight: 30
                            }}>
                                {data.passoutYear}
                            </Text>
                            <Image source={require('../../assets/Logo.png')}
                                style={{width: 32, height: 32}}
                            />
                            <View style={{flexDirection: 'column', paddingLeft: 20}}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    {data.instituteName}, {data.city}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#035C92',
                                    paddingRight: 31
                                }}>
                                    {data.batchGroup} ({data.passoutClass})
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '600',
                                    color: '#87B70D',
                                    paddingRight: 31
                                }}>
                                    Verified
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 30}}/>
                        <View style={{height: 1, backgroundColor: '#EAEAEC'}}/>
                        <View style={{height: 20}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: '#035C92',
                            paddingLeft: 16
                        }}>
                            Address
                        </Text>
                        <View style={{height: 20}}/>
                        <Text style={{
                            fontSize: 14,
                            color: '#035C92',
                            paddingLeft: 16
                        }}>
                            Currently living in: Kolhapur, {data.city}
                        </Text>
                        <View style={{height: 20}}/>
                        <Text style={{
                            fontSize: 14,
                            color: '#035C92',
                            paddingLeft: 16
                        }}>
                            Hometown: {data.city}
                        </Text>
                        <View style={{height: 20}}/>
                        <View style={{height: 1, backgroundColor: '#EAEAEC'}}/>
                        <View style={{height: 20}}/>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '600',
                            color: '#035C92',
                            paddingLeft: 16
                        }}>
                            Contact
                        </Text>
                        <View style={{height: 20}}/>
                        <Text style={{
                            fontSize: 14,
                            color: '#035C92',
                            paddingLeft: 16
                        }}>
                            Email: {data.email}
                        </Text>
                        <View style={{height: 20}}/>
                        <Text style={{
                            fontSize: 14,
                            color: '#035C92',
                            paddingLeft: 16
                        }}>
                            Phone: {data.phoneNo}
                        </Text>
                        <View style={{height: 20}}/>
                        <View style={{height: 3, backgroundColor: '#EAEAEC'}}/>
                        <View style={{height: 20}}/>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default SamInfoPage;

