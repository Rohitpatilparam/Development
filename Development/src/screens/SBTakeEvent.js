import React, { useEffect, useState } from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'
import axios from 'axios';

function SBTakeEvent(props) {
  const [event, setEvent] = useState()

  useEffect(() => {
   setEvent(props?.route.params.event)
  }, [props.route.params.event])
 console.log(event,"Event");
 
  
  // const postData =  ()=>{
  //  fetch("http://192.168.65.215:5000/api/event/store",{
  //   mode: "cors",
  //   method:"POST",
  //   headers: { "Content-Type": "application/json" },
  //   body:JSON.stringify(event)
  //   }).then((res)=>console.log(res)).catch((err)=>console.error(err))
  // }

  const submit= async()=>{
     console.log(event,"inner");
    await axios.post("http://192.168.65.215:5000/api/event/store",event)
    .then((response)=>(response.data))
    .catch((e)=>console.log(e?.response, "error"))
    

   props.navigation.navigate('SBShowEvent');

   
   
  }
   
  return (
    
    <>
      {
        !!event && <View style={{marginLeft:16}}>
    <View style={{height:14}}></View>
     <View>
         <Image source={require('./Arrow.png')}/>
     </View>
     <Text style={{marginTop:11.35,fontSize:24}}>Preview</Text>
     <View style={{height:17}}></View>
     <View style={{flexDirection:'row'}}>
      <Image style={{height:24,width:24}} source={require('./Person.png')}/>
     
         <Text style={{marginLeft:8,marginTop:2}}>John Dan</Text>
         <Text style={{color:"#535665",marginTop:2}}> posting a new </Text>
         <Text style={{color:"#E46D47",marginTop:2}}>News Update</Text>
     

     </View>

     <View style={{height:24}}></View>
     <Image style={{height:267,width:328,borderRadius:12}} source={require('./Group.png')}/>
     <Text style={{marginTop:-40,marginLeft:41,fontSize:20,color:"white"}}>{event?.title}</Text>
     <View style={{height:44}}></View>
     <View style={{height:72,width:295}}>
     <Text style={{fontSize:14}}>Description -  {event.description}</Text>  
     <Text style={{fontSize:14}}>Date -             {event.date}</Text>  
     <Text style={{fontSize:14}}>Address -       {event.address}</Text>  
     <Text style={{fontSize:14}}>Phone Num - {event.phone}</Text>  
     </View>  

     <View style={{height:10}}></View>
     <Text style={{color:"#035C92"}}>@Kishor Kadam, @Prasad Bhosale</Text>
     <View style={{height:24}}></View>
     <View style={{flexDirection:'row'}}>
      <Text style={{color:"#7D7F8B"}}>who all can see this post</Text>
      <Text style={{marginLeft:90,color:"#E46D47"}}>Public</Text>
     </View>
     <View style={{height:32}}></View>
     <TouchableOpacity
     onPress={()=>submit()}
     
     
     >
      <View style={{height:40,width:328,backgroundColor:"#FF540B",borderRadius:20}}>
        <Text style={{marginLeft:127,marginTop:12,color:"white"}}>Submit Post</Text>
      </View>
     </TouchableOpacity>
    </View>
      }
    </>
    
  )
}

export default SBTakeEvent