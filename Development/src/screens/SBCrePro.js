import React, { useState } from 'react'
import { View ,Text,Image, TextInput,TouchableOpacity,Modal} from 'react-native'
import Calendar from "react-native-calendars/src/calendar"
import { Formik } from 'formik';

function SBCrePro(props) {
    const [showCal, setShowCal]=useState(false);
    const [calDate, setCalDate] = useState()


  return (

    <Formik
    initialValues={{FirstName:"",LastName:"",phone:"",email:"",date:""}}
    onSubmit={(values)=>{      
     // setEvent({...values, date:calDate })
     const student = {...values, date:calDate }
     console.log(student,"student")
     props.navigation.navigate('SBAddClg',{student})
      
      }}
      
      
    >
    
     {({handleChange, handleSubmit, values})=>(

    <View style={{backgroundColor:"#F6F6FE"}}>
    <View style={{marginLeft:18,width:360,height:640}}>
    <View style={{height:14}}></View>
         <View>
            <Image source={require('./Arrow.png')}/>
         </View>
         <View style={{height:39.35}}></View>
         <Text style={{fontSize:24}}>Create Your Profile</Text>
         <View style={{width:325}}>
         <Text style={{marginTop:17,fontSize:12}}>please provide the basic details below to 
               create your profile.Ensure that you
                 provide genuines details as the same authentication process
         </Text>
         </View>
         <View style={{height:24}}></View>
         <View style={{flexDirection:"row"}}>
            <TextInput
              style={{height:32,width:155,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
                placeholder='  First Name'
                onChangeText={handleChange('FirstName')}
                value={values.FirstName}
            />
             <TextInput
              style={{height:32,width:155,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4,marginLeft:15}}
                placeholder=' Last Name'
                onChangeText={handleChange('LastName')}
               value={values.LastName}
            />

         </View>
         <View style={{height:16}}></View>
         <TextInput
              style={{height:32,width:325,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
                placeholder=' Email Id'
                onChangeText={handleChange('email')}
                value={values.email}
            />
             <View style={{height:16}}></View>

             <View style={{flexDirection:"row"}}>
            <View style={{height:32,width:69,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}>
               <Text style={{marginTop:6,marginLeft:20}}>91</Text>

            </View>
             <TextInput
              style={{height:32,width:238,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4,marginLeft:16}}
                placeholder=' Phone Number'
                onChangeText={handleChange('phone')}
                value={values.phone}
            />

         </View>
         <View style={{height:16}}></View>
        <TouchableOpacity
        onPress={()=>setShowCal(true)}
        >

         <View style={{width:325,height:32,borderWidth:1,borderColor:"#D4D5D9",flexDirection:'row',borderRadius:4}}>
            <Image  style={{marginLeft:15,marginTop:8}} source={require('./Cal.png')}/>
            <Text style={{marginLeft:16,marginTop:6}}> Date of Birth</Text>

         </View>
         </TouchableOpacity>

         <Modal visible={showCal} animationType="fade">
      <Calendar style={{borderRadius:10,elevation:4,margin:10}}
       onDayPress={date=>{
        console.log(date);
         setShowCal(false)
        setCalDate(date.dateString)
       }}


      />
    </Modal>


         <View style={{height:139}}></View>


         <TouchableOpacity
          onPress={handleSubmit}
           >
      <View style={{height:40,width:328,backgroundColor:"#FF540B",borderRadius:20}}>
        <Text style={{marginLeft:135,marginTop:12,color:"white"}}>Submit </Text>
      </View>
     </TouchableOpacity>
     <View style={{height:47}}></View>
     <Text style={{marginLeft:125,color:"#E46D47"}}>Need Help ?</Text>
    

        
    </View>
    
   
    </View>)}
    </Formik>
  )
}

export default SBCrePro