import React, { useEffect, useState } from 'react'
import { View,Text, ScrollView,Image, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';

function SBAddClg(props) {
    let [student, setStudent]=useState()


useEffect(()=>{
    setStudent(props?.route.params.student)

},[props.route.params.student])
{student && console.log(student,"InSBCLG")}



  return (
     
  
    <Formik
    initialValues={{ClgName:"",ClgCountry:"",ClgCity:"",ClgState:""}}
    onSubmit={(values)=>{      
     // setEvent({...values, date:calDate })
     const college = {...values, ...student}
     props.navigation.navigate('SBAddBatch',{college})
     {college && console.log(college,"college")} 
      
      }}
      
      
    >
    
     {({handleChange, handleSubmit, values})=>(


    <ScrollView>
    <View style={{height:970,width:360,backgroundColor:"#F6F6FE"}}>
    <View style={{marginLeft:16}}>
       <View style={{height:14}}></View>
       <Image source={require('./Arrow.png')}/>
       <View style={{height:32.35}}></View>
       <Text style={{fontSize:24}}>Create Your School/College</Text>
       <View style={{height:16}}></View>
       <Text style={{fontSize:12}}>Provide us with the basic information
                                 about your school that will help to other
                                  serch foryour school
       </Text>

       <View style={{height:24}}></View>
       <View>
        <Image  style={{height:96,width:96,marginLeft:112}} source={require('./logo.png')}/>
        <Image  style={{height:32,width:32,marginLeft:186,marginTop:-30}} source={require('./Cam.png')}/>
       </View>
       <View style={{height:24}}></View>

       <TextInput
       style={{width:328,height:32,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
        placeholder='   Name of the Institute'
        onChangeText={handleChange('ClgName')}
                value={values.ClgName}


       />

    <View style={{height:24}}></View>
    <Text style={{fontSize:14,color:"#035C92"}}>Institute Address</Text>
    <View style={{height:16}}></View>

    <TextInput
       style={{width:328,height:32,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
        placeholder='   Country'
        onChangeText={handleChange('ClgCountry')}
                value={values.ClgCountry}
       />

      <View style={{height:16}}></View>

      <TextInput
         style={{width:328,height:32,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
          placeholder='   State'
          onChangeText={handleChange('ClgState')}
                value={values.ClgState}
      />


        <View style={{height:16}}></View>

        <TextInput
            style={{width:328,height:32,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
            placeholder='   City' 
            onChangeText={handleChange('ClgCity')}
                value={values.ClgCity}
        />
        <View style={{height:32}}></View>


        <TouchableOpacity
          onPress={handleSubmit}
           >
      <View style={{height:40,width:328,backgroundColor:"#FF540B",borderRadius:20}}>
        <Text style={{marginLeft:135,marginTop:12,color:"white"}}>Submit </Text>
      </View>
     </TouchableOpacity>





    </View>
        
    </View>
    </ScrollView> )}
    </Formik>
  )
}

export default SBAddClg