import React from 'react'
import { useQuery}  from "react-query";
import { View,Text,Image, ScrollView } from 'react-native'
import axios from "axios"

function SBShowStudent() {

    const {data}=useQuery("event",async()=>{
        return await axios.get("http://192.168.65.215:5000/api/student/index")
        .then((data)=>(data.data))
        .catch((e)=>e);
    });



  return (
    <ScrollView>
    {data && data.response.map((CS)=>{
        return(
  
    
    <View key={CS._id}>
        <Image style={{height:360,width:360}} source={require('./Student.png')}/>
        <Image  style={{marginTop:-346,marginLeft:14}} source={require('./Arrow.png')}/>
        <Text style={{marginLeft:16,marginTop:230,color:"white",fontSize:24}}>{`${CS.FirstName} ${CS.LastName}`}</Text>
        <Text style={{marginLeft:16,color:'white',marginTop:10}}>Software Engineer . {CS.ClgCity}</Text>
        <View style={{marginLeft:16,marginTop:50}}>
            <Text  style={{color:"#E46D47"}}>About & Contact</Text>
            <View style={{height:3,width:110,backgroundColor:"#E46D47",marginTop:10}}></View>
            <View style={{height:24}}></View>
            <Text style={{color:"#035C92"}}>About {CS.FirstName} :</Text>
            <Text style={{color:"#535665"}}>Lorem ipsum dolor sit amet, consectetur 
                               adipiscing elit. In sollicitudin at
                                urna at ornare. Mauris blandit mattis tortor 
                                it amet luctus elit mattis vitae.
            </Text>
            <View style={{height:24}}></View>
            <Text style={{color:"#035C92"}}>Job & Education</Text>
            <View style={{height:24}}></View>
            <View style={{flexDirection:'row'}}>
                <View style={{width:87,height:24,backgroundColor:"#D4D5D980",borderRadius:20}}>
                    <Text style={{fontSize:12,marginLeft:16,marginTop:5}}>Skill set 1</Text>
                </View>
                <View style={{width:87,height:24,backgroundColor:"#D4D5D980",borderRadius:20,marginLeft:16}}>
                    <Text style={{fontSize:12,marginLeft:16,marginTop:5}}>Skill set 2</Text>
                </View>
                <View style={{width:87,height:24,backgroundColor:"#D4D5D980",borderRadius:20,marginLeft:16}}>
                    <Text style={{fontSize:12,marginLeft:16,marginTop:5}}>Skill set 3</Text>
                </View>

            </View>

            <View style={{height:24}}></View>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"#035C92"}}>{`${CS.JoinYear} ${CS.PassoutYear}`}</Text>
                <Image  style={{height:32,width:32,marginLeft:31}} source={require('./College.png')}/>
                <View style={{marginLeft:12}}>
                    <Text style={{fontSize:16,color:"#535665"}}>{CS.ClgName} , {CS.ClgCity}</Text>
                    <Text style={{color:"#535665"}}>Designation, Sector</Text>
                    <Text style={{color:"#535665"}}>{CS.JoinYear}-{CS.PassoutYear}</Text>
                </View>
            </View> 
            <View style={{height:16}}></View> 

            <View style={{flexDirection:"row"}}>
                <Text style={{color:"#035C92"}}>{CS.JoinClass}-{CS.PassoutClass}</Text>
                <Image  style={{height:32,width:32,marginLeft:31}} source={require('./Batch.png')}/>
                <View style={{marginLeft:12}}>
                    <Text style={{fontSize:16,color:"#535665"}}>{CS.BatchGroup} , Kolhapur</Text>
                    <Text style={{color:"#535665"}}>Designation, Sector</Text>
                    <Text style={{color:"#535665"}}> {CS.JoinClass}-{CS.PassoutClass}</Text>
                </View>
            </View> 

            <View style={{height:16}}></View> 

           <View style={{height:1,width:360,backgroundColor:"#EAEAEC"}}></View>
           <View style={{height:24}}></View>
           <Text style={{color:"#035C92"}}>Address</Text>
           <View style={{flexDirection:"row"}}>
            <Text style={{color:"#035C92",marginTop:10}}>Current Living in :</Text>
            <Text style={{marginTop:10,marginLeft:2}}>{CS.ClgState}</Text>
           </View>
           <View style={{height:16}}></View> 
           <Text style={{color:"#035C92"}}>Contact</Text>
           <Text style={{marginTop:10}}>Email : {CS.email}</Text>
           <Text style={{marginTop:10}}>Phone : {CS.phone}</Text>
           <View style={{height:16}}></View> 
           
                    

        </View>
    </View>
   
    );
})}
</ScrollView>
  );
}

export default SBShowStudent