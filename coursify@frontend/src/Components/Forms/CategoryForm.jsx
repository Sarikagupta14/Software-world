import { Box, Button, FormLabel,Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryForm = () => {
    const[data, setData] = useState({
       Image: "",
       Name: ""
    })
    const toast = useToast()
    const nav = useNavigate()


     const {Image, Name} = data;
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)

    }
    
    const handleClick=()=>{

      try {
        const categoryData = axios.post('https://coursify-w5v8.onrender.com/category',data)
        console.log(categoryData)
        toast({
          position: 'top',
          title: "Data sent successfully",
          status: "success"
       })
       nav('/dashboard')
   } catch (error) {
       toast({
           position: 'top',
           title: "Try Again!",
           status: "failure"
        })
   }
    
       
    }



  return (
    <Box borderRadius={'10px'} p={'20px'} w={'50%'} h={'300px'}  m={'auto'} mt={'150px'} border={'1px solid gray'}>
    <Text textDecoration={'underline'} fontFamily={'cursive'} fontWeight={'600'} fontSize={'25px'}>Category Data</Text>
    <Box>
      <FormLabel fontSize={'20px'}>Image Url:</FormLabel>
      <Input
      type="text"
      w={'60%'}
      border={'1px solid gray'}
      value={Image}
      name='Image'
      onChange={handleChange}
      />
      </Box>

      <Box>
      <FormLabel fontSize={'20px'}>Software Type:</FormLabel>
      <Input
      type="text"
      w={'60%'}
      border={'1px solid gray'}
      value={Name}
      name='Name'
      onChange={handleChange}
      />
      </Box>
    
    <Button onClick={handleClick} border={'1px solid gray'} mt={'20px'}>Send data</Button>
    </Box>
  )
}

export default CategoryForm
