import { Box, Button, Flex, Table, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const StoryData = () => {
    const[story, setStory] = useState([])
    const toast = useToast()
    const Stories = async () => {
        try {
          const response = await axios.get("https://software-backend.onrender.com/story");
          setStory(response.data);
          // console.log(response.data)
         
        } catch (error) {
          console.log(error)
        }
      };
      useEffect(()=>{
        Stories()
      })

      const handleDelete=(id)=>{
      
             axios.delete(`https://software-backend.onrender.com/story${id}`)
            console.log(id)
            toast({
               position: 'top',
               title: "Deleted Successfully",
               status: "success"
            })
        
    
    
      }




  return (
    <Box>
        <Flex   justifyContent={'right'}>
        <Link to="/story"><Button>Post Stories</Button></Link>
        </Flex>
      
      <Table size="md" variant="simple"  border={'1px solid gray'}>
          <Thead bgColor="#CCD1D1" w="100%"  border={'1px solid gray'}>
            <Tr>
              <Th color={"Black"} fontWeight={"bold"}>Name</Th>
              <Th color={"Black"} fontWeight={"bold"}>Story</Th>
              <Th color={"Black"} fontWeight={"bold"}>DELETE</Th>    
            </Tr>
          </Thead>
          <Tbody>
            {story && story.map((u) => (
              <Tr key={u._id} border="2px solid gray">
                <Td color={"Black"} fontWeight={"bold"}>{u.Name}</Td>
                <Td color={"Black"} fontWeight={"500"}>{u.story} </Td>
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

export default StoryData
