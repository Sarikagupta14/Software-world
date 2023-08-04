import {  Image, SimpleGrid } from '@chakra-ui/react'
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import React from 'react'
import { FaUser } from 'react-icons/fa';

export const Center = () => {
  return (
    <Box>
        <Box w="100%" >
            <Image src='https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595849.jpg?w=1480&t=st=1690562723~exp=1690563323~hmac=9037acdd3ee552d97c09921419998a4593074c62dbca4482ef1c276293cdd063'/>
        </Box>

<SimpleGrid columns={[1,2,3]} m="auto"p="10px" mt="100px" >
        <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb="4">
        Delhi NCR
      </Heading>

      <Flex align="start" mb="2">
        <Icon as={MdLocationOn} boxSize="5" mr="2" />
        <Text align={"start"}>25th Floor, Rajendar nagar, Sector 3, Delhi, Uttar Pradesh 201301</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdPhone} boxSize="5" mr="2" />
        <Text>01144444444</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdEmail} boxSize="5" mr="2" />
        <Text>info@softwareworld</Text>
      </Flex>
    </Box>


    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb="4">
        Kolkata
      </Heading>

      <Flex align="center" mb="2">
        <Icon as={FaUser} boxSize="5" mr="2" />
        <Text>C/O Mrs. Neelam sinha</Text>
      </Flex>

      <Flex align="start" mb="2">
        <Icon as={MdLocationOn} boxSize="5" mr="2" />
        <Text align={"start"}> 12th Floor, sector - 17B, Lakshmi nagar, Howrah, West Bengal</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdPhone} boxSize="5" mr="2" />
        <Text>7777777777</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdEmail} boxSize="5" mr="2" />
        <Text>admin@softwareworld.com</Text>
      </Flex>
    </Box>



    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb="4">
      Bangaluru
      </Heading>

      <Flex align="center" mb="2">
        <Icon as={FaUser} boxSize="5" mr="2" />
        <Text>C/O Mrs. Saira sen</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdLocationOn} boxSize="5" mr="2" />
        <Text>32B, sarjapur, Bengaluru, Karnataka</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdPhone} boxSize="5" mr="2" />
        <Text>9999999999</Text>
      </Flex>

      <Flex align="center" mb="2">
        <Icon as={MdEmail} boxSize="5" mr="2" />
        <Text>@softwareworld.com</Text>
      </Flex>
    </Box>
    </SimpleGrid>


    </Box>
  )
}