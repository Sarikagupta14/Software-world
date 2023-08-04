import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  
  Box,
  Select,
  Heading,
  Flex,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const toast = useToast()
  const nav = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        state: '',
        number: '',
        stream: '',
        preferredCity: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
          try {
            const categoryData = axios.post('https://coursify-w5v8.onrender.com/contact',formData)
            console.log(categoryData)
            toast({
              position: 'top',
              title: "Thank you for contacting us",
              description: "Our team will reach out to you as soon as possible!",
              status: "success"
           })
           nav('/')
       } catch (error) {
           toast({
               position: 'top',
               title: "Try Again!",
               status: "failure"
            })
       }
       
      };
  return (
    <Box >
        <Box h={{base:"255px",md:"400px",lg:"70vh"}} bgSize={{base:"contain",lg:"cover"}} m="auto" bgImage={"https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_1280.jpg"}bgRepeat={"no-repeat"} w="100%">
            <Heading  pt={{base:"100px",md:"220px",lg:"100px"}} color={"#f28524"} fontSize={{base:"20px",md:"30px",lg:"36px"}}>Aim, Aspire and Achieve with Software World</Heading>
        </Box>


<Box  mt="-100px" >
    <Box  w={{base:"100%",md:"70%",lg:"60%"}} m="auto"><Image h="50px" borderTopRightRadius={"100px"} src='https://github.com/shwetra/assa/assets/104376252/512401b3-2fe8-4c65-8a30-a0c99a6ac673'/> </Box>
<form onSubmit={handleSubmit}>
     <Flex bg={"white"} border="1px" borderRadius={"20px"} borderTopLeftRadius={"0px"} w={{base:"100%",md:"70%",lg:"60%"}} gap={"40px"} p="30px" m={"auto"} mb="40px" direction={{base:"column",md:"row",lg:"row"}}>
        <Box w={{base:"100%",md:"50%",lg:"50%"}} >
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>
       
        <FormControl isRequired>
          <FormLabel>Email ID</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>State</FormLabel>
          <Select
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Select State"
            isRequired
          >
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </Select>
        </FormControl>


        </Box>

        <Box w={{base:"100%",md:"50%",lg:"50%"}}>

        <FormControl isRequired>
          <FormLabel>Number</FormLabel>

          <Input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Stream</FormLabel>
          <Input
            type="text"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel >Preferred City</FormLabel>
          <Select
            name="preferredCity"
            value={formData.preferredCity}
            onChange={handleChange}
            placeholder="Select Preferred City"
            
          >
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi / NCR">Delhi / NCR</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Surat">Surat</option>
            <option value="Jaipur">Jaipur</option>
          </Select>
        </FormControl>
        </Box>
        </Flex>
        <Box>
          <Button bg="#00375D" color={"white"} type="submit">
            Submit
          </Button>
        </Box>
     
    </form>
</Box>


<Box>
    <Text fontSize={'20px'} mt={'20px'} fontWeight={'500'}>Why SOFTWARE World ?</Text> 
    <Text w={{base:"95%",lg:"70%"}} m="auto" align={"start"}>“It is not about how hard you work but it is about how smartly you manage your time, resources, mind, and efforts to work together for a better result”.– Anonymous.</Text>
    <Text w={{base:"95%",lg:"70%"}} m="auto" align={"start"}>In the present era, time is money, and to value your money and efforts, we bring forth admissionshala.com, an admission consultant in Pune, Maharashtra. We are an extraordinarily selective digital platform fabricated specially for aspiring students to counsel, guide, and help in career mapping.</Text>
</Box>


    </Box>
  )
}