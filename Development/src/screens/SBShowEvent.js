import React, { useEffect, useState } from 'react'
import { Text, View,Image,FlatList,ScrollView } from 'react-native'
import { useQuery}  from "react-query";
import axios from "axios"




function SBShowEvent() {
//  const [allEvent,setAllEvent]=useState([]);


const {data}=useQuery("event",async()=>{
    return await axios.get("http://192.168.65.215:5000/api/event/index")
    .then((data)=>(data.data))
    .catch((e)=>e);
});

// console.log(Event);
// useEffect(()=>{
//   getData()
// },[])


 
// const getData = () => {
//   fetch("http://192.168.65.215:5000/api/event/index", {
//     method: "GET",
//     mode: "cors",
//     headers: {},
//   })
//     .then((resp) => resp.json())
//     .then((data) => setAllEvent(data.response))
//     .catch((err) => console.error(err));
// };









  return (
    <ScrollView>
    <View style={{marginLeft:16}}>
    <View style={{height:14}}></View>
    <View>
        <Image source={require('./Arrow.png')}/>
    </View>
    <Text style={{marginTop:11.35,fontSize:24}}>Post</Text>
    <View style={{height:17}}></View>

      {data && data.response.map((currEvent)=>{
        return(
          

          <View key={currEvent._id}>
     <View style={{flexDirection:'row'}}>
         <Image style={{height:24,width:24}} source={require('./Person.png')}/>
    
        <Text style={{marginLeft:8,marginTop:2}}>John Dan</Text>
        <Text style={{color:"#535665",marginTop:2}}> posted a </Text>
        <Text style={{color:"#E46D47",marginTop:2}}>News</Text>
    

      </View>

         <View style={{height:24}}></View>
          <Image style={{height:267,width:328,borderRadius:12}} source={require('./Group.png')}/>

       
      
       
          <Text style={{marginLeft:80,marginTop:-50,color:'white',fontSize:20}}>     {currEvent.title}</Text>
          <View style={{height:50}}></View>
                 <View >
                
                 
                 
            
             <Text>Description-  {currEvent.description}</Text>
             <Text>Address-        {currEvent.address}</Text>
             <Text >Date-              {currEvent.date}</Text>
            <Text>Phone No-     {currEvent.phone}</Text>
           </View>
         


        




      
     <View style={{height:16}}></View>
       <Text style={{color:"#035C92"}}>@Kishor Kadam, @Prasad Bhosale</Text>
       <View style={{height:24}}></View>
       <View style={{flexDirection:'row'}}>
        <Image style={{height:24,width:24}} source={require('./P1.png')}/>
        <Image style={{height:24,width:24,marginLeft:-4}} source={require('./P2.png')}/>
        <Image style={{height:24,width:24,marginLeft:-4}} source={require('./P3.png')}/>
        <Text style={{marginLeft:8,marginTop:4,color:"#7D7F8B"}}>and 8 other like this post</Text>
       </View>
       <View style={{height:20}}></View>

       </View>




        );
      })}
  

    
    </View>
    </ScrollView>
    
  )
}

export default SBShowEvent