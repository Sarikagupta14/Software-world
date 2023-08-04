import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Box>
        <Image src="https://unicertglobal.com/wp-content/uploads/2019/03/Image-2.jpg"/>




        <Box w="100%" textAlign={"justify"} >
    <Flex direction={{base:"column",md:"column",lg:"row"}} >
        <Box w={{base:"90%",md:"90%",lg:"50%"}} p="100px"> <Image ml="30px" src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/5d7092c9-4ca0-4515-85be-1713bcd0ec13" alt="Logo"  /></Box>
        <Box w={{base:"90%",md:"90%",lg:"50%"}}  m="auto">
        <Box w={{base:"100%",md:"100%",lg:"90%"}}>
        <Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="28px"
              mb={4}
            >
              About  
            </Heading>
            <Text >A company is known by the capabilities and skills of its employees and LogicSpice is proud to have such a diversified and proficient team of dedicated professionals. Our main strategy to grow as a company is to invest in human resources that is believed to be our main asset.

At LogicSpice our clients have the legitimacy to choose from the wide pool of professionals according to their project specification. We always ensure that our professionals are updated with latest technologies persisting in the market and always work towards innovation. With the hands on various projects in web application development our team has evolved in way to deliver effective and lucrative projects within given deadline and this has helped us in gaining the trust and satisfaction of our clients for a long run.</Text>
        </Box>
        <Flex direction={{base:"column",md:"column",lg:"row"}} gap="30px" mt="20px">
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>Standing out among its achievements is the creation of patented Plasteel® premium wheel weights for passenger cars and light trucks. Leveraging forward-thinking technology, these weights have set new innovation benchmarks in the automotive sector, symbolizing excellence and progress.</Text>
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>With an unyielding drive to push boundaries, this brand shapes the automotive landscape, inspiring industry-wide transformation. A true pioneer, its dedication to embracing innovation cements its leadership in the ever-evolving world of automobiles.</Text>
        </Flex>
        </Box>
    </Flex>
</Box>

<Box textAlign={"start"} ml="30px"  w="90%">
    <Heading color="#f28524">Customer support</Heading>
    <Text fontWeight={500} w={'600px'}>A leading remote work category, customer support jobs are some of the most common remote positions for small and large companies alike 👥 Find the latest remote customer support jobs below!</Text>
</Box>






{/* today */}
<Box w="100%" textAlign={"justify"} >
    <Flex direction={{base:"column",md:"column",lg:"row"}} >


    <Box w={{base:"90%",md:"90%",lg:"50%"}}  m="auto">
        <Box w={{base:"90%",md:"100%",lg:"90%"}} ml="30px">
        <Heading
              as="h3"
              w="50%"
              borderBottom={"2px solid #f28524"}
              fontSize="28px"
              mb={4}
              
            >
              Today  
            </Heading>
            <Text >At SoftwareWord, we are passionate about the power of software and its ability to transform businesses and enhance lives. Our company is dedicated to providing innovative and cutting-edge software solutions that cater to the diverse needs of our clients.</Text>
            <Text>Our mission is to empower businesses and individuals with the latest software technologies, enabling them to achieve their goals efficiently and effectively. We strive to be a leading player in the software.</Text>
        </Box>
       
        </Box>
        <Box w={{base:"90%",md:"90%",lg:"50%"}} p="100px"> <Image  src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/5d7092c9-4ca0-4515-85be-1713bcd0ec13" alt="Logo"  /></Box>
       
    </Flex>
</Box>



{/* TEXT  */}
<Box  textAlign={"justify"} w="90%" m="auto">
    <Text mb="30px">Our team consists of highly skilled software engineers, developers, and designers who are experts in their respective domains. With a wealth of experience and a commitment to continuous learning, they deliver solutions that exceed expectations.


</Text>
    <Text mb="30px">Client-Centric Approach: We believe in putting our clients at the heart of everything we do. Understanding their unique requirements and challenges allows us to tailor solutions that perfectly align with their business objectives.
Innovation and Creativity: Innovation drives us. We stay ahead of the curve by embracing emerging technologies and trends. Our creative approach to problem-solving ensures that we deliver solutions that are not only functional but also aesthetically appealing.

Quality and Reliability: We adhere to the highest standards of quality and reliability. Rigorous testing and thorough quality assurance processes are integral parts of our development methodology.
</Text>
    <Text mb="50px">Timely Delivery: We understand the value

Timely Delivery: We understand the value of time for our clients. Through meticulous planning and efficient project management, we ensure timely delivery of projects without compromising on quality.</Text>
</Box>
    </Box>
  )
}