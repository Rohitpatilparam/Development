import React, { useState } from 'react'
import { View,Text,Image, TextInput, TouchableOpacity,Button,ScrollView, Modal } from 'react-native'
import { Formik } from 'formik';
import SBTakeEvent from './SBTakeEvent';
import Calendar from "react-native-calendars/src/calendar"
import { useLinkProps } from '@react-navigation/native';

function SBEventPost(props) {
   const[Event,setEvent]= useState([]);
   const [showCal, setShowCal]=useState(false);
   const [calDate, setCalDate] = useState()

   

  
  
  return (
    
    <Formik
    initialValues={{title:"",address:"",phone:"",description:"",date:""}}
    onSubmit={(values)=>{      
     // setEvent({...values, date:calDate })
     const event = {...values, date:calDate }
      props.navigation.navigate('SBTakeEvent',{event})
      
      }}
      
    >
    
     {({handleChange, handleSubmit, values})=>(
      
    



    <ScrollView>
    <View style={{marginLeft:18}}>
    <View style={{height:14}}></View>
       <View>
            <Image source={require('./Arrow.png')}/>
         </View>
    <Text style={{marginTop:11,fontSize:16}}>Events Post</Text>
    <View style={{height:17}}></View>
    <View>
        <Text style={{fontSize:12}}>Post Latesst events, awarrding ceremony,alumini meet etc happning that your bachment may want to join </Text>
    </View>  
    <View style={{height:16}}></View>
    <View style={{height:150,width:328, backgroundColor:"#8A64EB",borderRadius:10}}>
        <View style={{height:40}}></View>
        <TextInput
             onChangeText={handleChange('title')}
          
           value={values.title}
           id="title"
           name="title"
            style={{marginLeft:16,width:296,height:38,borderStyle:'dashed',borderColor:'white',borderWidth:1}}
            placeholder="Write Your Post"
        />
        <View style={{height:32}}></View>
        <View style={{flexDirection:'row'}}>

            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R1.png')}/>
            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R2.png')}/>

            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R3.png')}/>
            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R4.png')}/>

            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R5.png')}/>
            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R6.png')}/>
            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R7.png')}/>
            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R8.png')}/>
            <Image style={{marginLeft:8,height:24,width:24}} source={require('./R9.png')}/>



      
      
        </View>

       

    </View>
     
     <View style={{height:24}}></View>
     <View style={{flexDirection:'row',height:32,width:325}}>

     <View style={{width:155,height:32,borderColor:'#D4D5D9',borderWidth:1,borderRadius:4,flexDirection:'row'}}>
     <Text style={{marginTop:5,marginLeft:3}}> Date</Text>
     <TouchableOpacity
     onPress={()=>setShowCal(true)}
     >
     <Image  style={{marginLeft:89,marginTop:5}} source={require('./Cal.png')}/>
     </TouchableOpacity>


    {/* Show Cal */}
    <Modal visible={showCal} animationType="fade">
      <Calendar style={{borderRadius:10,elevation:4,margin:10}}
       onDayPress={date=>{
        // console.log(date);
         setShowCal(false)
        setCalDate(date.dateString)
       }}


      />
    </Modal>






        
        
     </View>
     
     <View style={{width:69,marginLeft:16,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}>
        <Text style={{margin:5,marginLeft:15,color:"#282C3F"}}>HM</Text>
     </View>

     <View style={{width:69,marginLeft:16,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}>
        <Text style={{margin:5,marginLeft:15,color:"#282C3F"}}>MM</Text>
     </View>

     </View>


     <View style={{height:24}}></View>
     <TextInput
        style={{height:32,width:325,borderWidth:1,borderColor:'#D4D5D9',borderRadius:4}}
        placeholder="  URL (if any)"
     />

    <View style={{height:16}}></View>
    <TextInput
        style={{height:60,width:325,borderWidth:1,borderColor:'#D4D5D9',borderRadius:4}}
        placeholder="  Address"
        onChangeText={handleChange('address')}
        value={values.address}
           id="address"
           name="address"
        
     />
     

     <View style={{height:16}}></View>
    <TextInput
        style={{height:105,width:325,borderWidth:1,borderColor:'#D4D5D9',borderRadius:4}}
        placeholder="  Description"
        onChangeText={handleChange('description')}
          
           value={values.description}
           id="description"
           name="description"
     />

     <View style={{height:16}}></View>
     <Text style={{color:"#035C92"}}> Contact Person</Text>
     <View style={{height:8}}></View>

     <View style={{height:32,width:325,flexDirection:'row'}}>
        <Text style={{width:69,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4,padding:5}}>  91</Text>
        <TextInput
            style={{width:238,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4,marginLeft:16}}
            placeholder="  Phone Number"
            onChangeText={handleChange('phone')}
          
           value={values.phone}
            name="phone"
            id="phone"
        />

     </View>
    
     <View style={{height:32}}></View>
    
    {/* <Button
        title="Submit Post"
        color="#FFC750"
        onPress={handleSubmit}
    /> */}

    <TouchableOpacity
     onPress={handleSubmit}
     
     
     >
      <View style={{height:40,width:328,backgroundColor:"#FF540B",borderRadius:20}}>
        <Text style={{marginLeft:127,marginTop:12,color:"white"}}>Submit Post</Text>
      </View>
     </TouchableOpacity>
     <View style={{height:32}}></View>


    </View>
    </ScrollView> )}
    </Formik>
  )
}

export default SBEventPost