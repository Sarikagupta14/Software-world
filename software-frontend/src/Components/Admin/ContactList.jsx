import { Box, Button, Flex, Table, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const CategoryData = () => {
    const[categoryData, setCategoryData] = useState([])
     const toast = useToast()
    const categoriesData = async () => {
        try {
          const response = await axios.get("https://coursify-w5v8.onrender.com/contact");
          setCategoryData(response.data);
          // console.log(response.data)
        
        } catch (error) {
          console.log(error)
        }
      };
      useEffect(()=>{
        categoriesData()
      })
      const handleDelete=(id)=>{

       
            axios.delete(`https://coursify-w5v8.onrender.com/contact/${id}`)
            console.log(id)
            toast({
               position: 'top',
               title: "Deleted Successfully",
               status: "success"
            })
        
       
      }

      
  return (
    <Box>
  
  
  <Table size="md" variant="simple">
      <Thead bgColor="#CCD1D1" w="100%" border={'1px solid gray'}>
        <Tr>
          <Th color={"Black"} fontSize="15px" fontWeight={"bold"}>Name:</Th>
          <Th color={"Black"} fontSize="15px" fontWeight={"bold"}>Email:</Th>
          <Th color={"Black"} fontSize="15px" fontWeight={"bold"}>Number:</Th>
          <Th color={"Black"} fontSize="15px" fontWeight={"bold"}>DELETE</Th>    
        </Tr>
      </Thead>
      <Tbody border={'1px solid gray'}>
        {categoryData && categoryData.map((u) => (
          <Tr key={u._id} border="2px solid gray">
            <Td color={"Black"} fontWeight={"bold"}>{u.firstname}</Td>
            <Td color={"Black"} >{u.email}</Td>
            <Td color={"Black"} >{u.number}</Td>
              <Td><Button colorScheme="red" leftIcon={<AiOutlineDelete/>} size="sm" onClick={() => handleDelete(u._id)}>
                Delete
              </Button> </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
</Box>
  )
}

export default CategoryData
