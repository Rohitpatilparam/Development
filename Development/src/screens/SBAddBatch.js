import React, { useEffect, useState } from 'react'
import { View,Text,Image, TextInput,TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import axios from 'axios';


function SBAddBatch(props) {
const [batch, setBatch]=useState()


// const submit= async()=>{
   
//    await axios.post("http://192.168.65.215:5000/api/student/store",addBatch)
//    .then((response)=>(response.data))
//    .catch((e)=>console.log(e?.response, "error"))
   

//  // props.navigation.navigate('SBShowEvent');

  
  
//  }





    useEffect(()=>{
        setBatch(props?.route.params.college)
    
    },[props.route.params.college])
    {batch && console.log(batch,"BatchInBatch")}





  return (
    
    <Formik
    initialValues={{BatchGroup:"",JoinClass:"",JoinYear:"",PassoutClass:"",PassoutYear:""}}
    onSubmit={(values)=>{      
     // setEvent({...values, date:calDate })
     
      const addBatch={...values, ...batch};
      
    // props.navigation.navigate('SBAddBatch',college)
      {addBatch && console.log(addBatch,"addbatch")}
      {addBatch && axios.post("http://192.168.65.215:5000/api/student/store",addBatch)
   .then((response)=>(response.data))
   .catch((e)=>console.log(e?.response, "error"))

   props.navigation.navigate('SBShowStudent');
   
   
   }
      
      }}
      
      
    >
    
     {({handleChange, handleSubmit, values})=>(






    <View style={{width:360,height:690,backgroundColor:"#F6F6FE"}}>
    <View style={{marginLeft:16}}>
     <View style={{height:14}}></View>
     <Image source={require('./Arrow.png')}/>
     <View style={{height:24.35}}></View>
     <Text style={{fontSize:24}}>Reguest a New Batch</Text>
     <View style={{height:24.35}}></View>
     <Text style={{fontSize:14,color:"#035C92"}}>Your School</Text>
     <View style={{height:24.35}}></View>
     <View style={{flexDirection:"row"}}>
        <Image style={{height:24,width:18,marginLeft:7}} source={require('./BatchLogo.png')}/>
        <Text style={{marginLeft:15,marginTop:5,fontSize:14}}>SANIK SCHOOL, PUNE</Text>
     </View>
     <View style={{height:28}}></View>
     <View style={{width:325}}>
     <Text style={{fontSize:12}}>Your school has multiple batch structure, please select batch structure you belong to.</Text>
     </View>
     <View style={{height:29}}></View>

     <TextInput
        style={{height:36,width:328,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
        placeholder='  Batch Group'
        onChangeText={handleChange('BatchGroup')}
                value={values.BatchGroup}
     />
     <View style={{height:24}}></View>
     <Text >Provide your batch details</Text>
     <View style={{height:16}}></View>
     <View style={{flexDirection:"row"}}>
        <TextInput
            placeholder='  Your Joning Class'
            onChangeText={handleChange('JoinClass')}
                value={values.JoinClass}
            style={{width:156,height:36,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
        />

         <TextInput
            placeholder=' Joining Year'
            onChangeText={handleChange('JoinYear')}
                value={values.JoinYear}
            style={{width:156,height:36,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4,marginLeft:16}}
        />
     </View>

     <View style={{height:16}}></View>
     <View style={{flexDirection:"row"}}>
        <TextInput
            placeholder='  Passout class'
            onChangeText={handleChange('PassoutClass')}
                value={values.PassoutClass}
            style={{width:156,height:36,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4}}
        />

         <TextInput
            placeholder=' Passout Year'
            onChangeText={handleChange('PassoutYear')}
                value={values.PassoutYear}

            style={{width:156,height:36,borderWidth:1,borderColor:"#D4D5D9",borderRadius:4,marginLeft:16}}
        />
     </View>
     <View style={{height:49}}></View>
     <Text style={{fontSize:14,color:"#035C92"}}>Your Batch</Text>
     <View style={{height:14}}></View>
     <Text style={{fontSize:12}}>Based on your selection your batch shoud be:</Text>
     <View style={{height:16}}></View>
     <Text style={{fontSize:24}}>Batch of 1991-2005</Text>
     <View style={{height:35}}></View>

     <TouchableOpacity
          onPress={handleSubmit}
           >
      <View style={{height:40,width:328,backgroundColor:"#FF540B",borderRadius:20}}>
        <Text style={{marginLeft:70,marginTop:12,color:"white"}}>Proceed to vedio confirmation </Text>
      </View>
     </TouchableOpacity>



    </View>
        
    </View>)}
    </Formik>
  )
}

export default SBAddBatch