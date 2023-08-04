import { Box, Flex, Heading, Icon, Image, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'



import { Link } from 'react-router-dom'
import { BsPlayFill } from "react-icons/bs";
import axios from 'axios';
import Slider from '../Slider';


export const Home = () => {
  const[storyData, setStoryData] = useState([])
  const[categoryData, setCategoryData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get("https://coursify-w5v8.onrender.com/story");
      setStoryData(response.data);
      // console.log(response.data)
     
    } catch (error) {
      
    }
  };
  const categoriesData = async () => {
    try {
      const response = await axios.get("https://coursify-w5v8.onrender.com/category");
      setCategoryData(response.data);
      // console.log(response.data)
     
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
    categoriesData();
  }, []);




  return (
    <Box mt={{base:"30px",md:"50px"}}>
       {/* Section-1 */}
<Slider/>

<Box bg="gray.100" p="40px">
        <SimpleGrid columns={[1,2,2,3]} w={{base:"100%",md:"80%",lg:"90%"}} m="auto" gap="20px"  >
            <Box  bg="#E5E7E9" border={'1px solid #AEB6BF'} pt="25px" borderRadius={"20px"}  h="130px"><Heading fontSize={{base:"20px",md:"22px",lg:"26px"}}>Faster response</Heading>
                <Text>Get 3X faster response that will save your time more.</Text></Box>
            <Box  bg="#E5E7E9"  border={'1px solid #AEB6BF'} pt="25px" borderRadius={"20px"}  h="130px"><Heading fontSize={{base:"20px",md:"22px",lg:"26px"}}>100% Privacy Protection</Heading>
            <Text>We Promise to keep your personal details safe.</Text></Box>
            <Box  bg="#E5E7E9"  border={'1px solid #AEB6BF'} pt="25px" borderRadius={"20px"}  h="130px" ><Heading fontSize={{base:"20px",md:"22px",lg:"26px"}}>Daily Updates</Heading>
            <Text>Stay on top of regulatory updates that for your job.</Text></Box>
        </SimpleGrid>
</Box>


  {/* section-2: About */}
<Box w="100%" textAlign={"justify"} bgColor={'#EAFAF1'}>
    <Flex direction={{base:"column",md:"column",lg:"row"}} >
        <Box w={{base:"90%",md:"90%",lg:"50%"}}> <Image ml="30px" src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/5d7092c9-4ca0-4515-85be-1713bcd0ec13" alt="Logo"  /></Box>
        <Box w={{base:"90%",md:"90%",lg:"50%"}}  m="auto">
        <Box w={{base:"100%",md:"100%",lg:"90%"}} >
        <Heading
              as="h3"
              w={{base:"100%",lg:"50%"}}
            
              borderBottom={"2px solid #f28524"}
              fontSize="28px"
              mb={4}
            >
              About Software World
            </Heading>
            <Text>We are  Startups. We are into this industry since 2019. Currently we have 3 branches in India and have official consultant almost every state. We provide Secure jobs and assist you to provide motivating and upgrading Environment & culture in fileds of Frontend developer, backend developer, Android developer etc.</Text>
        </Box>
        <Flex direction={{base:"column",md:"column",lg:"row"}} gap="30px" mt="20px">
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>We have company size of 1-50 that mainly work to provide user-friendly websites to different companies with our excellence.</Text>
            <Text w={{base:"100%",md:"100%",lg:"45%"}}>We are growing in market fastly with our excellenxce delievery and team-work.</Text>
        </Flex>
        </Box>
    </Flex>
</Box>





{/* Section-3: Take the next step toward */}


<Box  bg="#FDF8F4" pt="100px" pb="100px"   >
<Flex direction={{base:"column",md:"column",lg:"row"}} justifyContent={"center"} w={{base:"95%",lg:"80%"}} m="auto"  >
<Box  borderRadius={"20px"}   w={{base:"90%",md:"90%",lg:"40%"}} p="20px"  m={{base:"auto"}}  bgColor={'#FEF5E7 '} border={'1px solid #F5B7B1 '}>
    <Heading fontStyle={"italic"} textAlign={"start"}>Take the next step toward your personal and professional goals with Software World!</Heading>
    <Text mt="60px" color={"skyblue"} textDecoration={"underline"} fontWeight={600}>Start Applying Now </Text>
</Box>
<Flex w={{base:"100%",md:"80%",lg:"60%"}} direction={{base:"column",md:"row",lg:"row"}}  m={"auto"} >
<Box m="auto">
<Box  bg={"#C9D9EA "} h="200px" w="250px" borderRadius={"20px"} border={"1px solid #D0ECE7"} pt="30px">
   <Image h={'50px'} m={'auto'} borderRadius={'50%'} src='https://png.pngtree.com/png-vector/20200828/ourmid/pngtree-modern-design-we-are-hiring-to-join-work-team-in-geometric-png-image_2333702.jpg'/>
    <Heading>10k+</Heading>
<Text>Companies hiring</Text>
</Box>
<Box bg={"#C9D9EA "} h="200px" w="250px" borderRadius={"20px"} mt="20px" border={"1px solid #D0ECE7 "} pt="20px">
  <Image  h={'50px'} m={'auto'} borderRadius={'50%'} src='https://img.lovepik.com/element/45012/1862.png_300.png'/>
<Heading>50K+</Heading>
<Text>Already applied</Text>
</Box>
</Box>
<Box m="auto" mt="20px">

<Box bg={"#C9D9EA "} borderRadius={"20px"} h="200px" w="250px" border={"1px solid #D0ECE7 "} pt="20px">
<Image  h={'50px'} m={'auto'} borderRadius={'50%'} src='https://icon-library.com/images/placement-icon/placement-icon-2.jpg'/>
<Heading>10k+</Heading>
<Text>Students got Placed</Text>
</Box>
<Box bg={"#C9D9EA "} borderRadius={"20px"} h="200px" w="250px" mt="20px" border={"1px solid #D0ECE7 "}pt="20px">
<Image  h={'50px'} m={'auto'} borderRadius={'50%'} src='https://www.pngmart.com/files/21/Job-Interview-PNG-Isolated-Photo.png'/>
<Heading>75M+</Heading>
<Text>1K+ daily interviews.</Text>
</Box>
</Box>
</Flex>
</Flex>
</Box>






{/* Section-4: Work */}


<Box bg="#EFF5FF" pt="40px">
    <Flex justifyContent={"center"}  pb="40px">
<Heading
              as="h3"
              
              w={{base:"100%",lg:"30%"}}
              align="center"
            
              borderBottom={"2px solid #f28524"}
              fontSize="36px"
              mb={4}
            >
             Our Team Work On
            </Heading>
            </Flex>

<SimpleGrid  columns={[1,1,2,3]} w={{base:"90%",md:"90%" ,lg:"80%"}} m="auto" gap="30px" pb="100px">
   
<Box _hover={{transform: 'scale(1.2)'}} bg={"white"} m="auto" cursor={"pointer"} borderWidth="1px" borderRadius="lg"  boxShadow="md" w={{base:"330px",md:"350px"}}  h="500px">
      <Image h="250px" w="100%" src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/showcase-img.svg" alt="Course Image" objectFit="cover"  />
      <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Text border={"1px solid green"} bg="green.100" p="3px" pl="10px" pr="10px" fontWeight={600} fontSize="sm" color="gray.500">Plan</Text>
           
      </Flex>
      <Box >
        <Text align={"start"} ml="10px"  borderBottom={"2px solid #f28524"} fontSize="20px"   fontWeight="bold" mb={2}>Web Development</Text>

        <Flex w="90%" m="auto" justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight={600} fontStyle={"italic"} color={"#f28524"}  borderBottom={"2px solid #f28524"} mb={2}>By Sarika</Text>
        <Flex mt="8px">
            <Image h="20px" mt="3px" src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/81d82a43-ffee-4918-baa7-24b90af09902' alt='rating image'/>
            <Text fontSize="sm" color="gray.500">(4.5)</Text>
        </Flex>

        
        </Flex >
        <Flex mr="20px" justifyContent={"end"} >
        <Flex  w="30%" borderBottom={"2px solid #f28524"}>
            <Text fontWeight={700} mr="10px">Price</Text>
            <Text fontWeight={700} mr="10px"> : </Text>
            <Text align={"right"}  mr="20px" fontSize="lg" fontWeight="bold" mb={2}>$29</Text>
        </Flex>
        </Flex>
      </Box>
    </Box>
  



   
<Box bg={"white"} _hover={{transform: 'scale(1.2)'}} m="auto" cursor={"pointer"} borderWidth="1px" borderRadius="lg"  boxShadow="md" w={{base:"330px",md:"350px"}}  h="500px">
      <Image h="250px" w="100%" src="https://cdn.pixabay.com/photo/2015/10/30/10/03/app-1013616_640.jpg" alt="Course Image" objectFit="cover"  />
      <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Text border={"1px solid green"} bg="green.100" p="3px" pl="10px" pr="10px" fontWeight={600} fontSize="sm" color="gray.500">Execute</Text>
             
      </Flex>
      <Box>
        <Text align={"start"} ml="10px"  borderBottom={"2px solid #f28524"} fontSize="20px"   fontWeight="bold" mb={2}>Android app development</Text>

        <Flex w="90%" m="auto" justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight={600} fontStyle={"italic"} color={"#f28524"}  borderBottom={"2px solid #f28524"} mb={2}>By Sarika</Text>
        <Flex mt="8px">
            <Image h="20px" mt="3px" src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/81d82a43-ffee-4918-baa7-24b90af09902' alt='rating image'/>
            <Text fontSize="sm" color="gray.500">(4.5)</Text>
        </Flex>

        
        </Flex >
        <Flex mr="20px" justifyContent={"end"} >
        <Flex  w="30%" borderBottom={"2px solid #f28524"}>
            <Text fontWeight={700} mr="10px">Price</Text>
            <Text fontWeight={700} mr="10px"> : </Text>
            <Text align={"right"}  mr="20px" fontSize="lg" fontWeight="bold" mb={2}>$45</Text>
        </Flex>
        </Flex>
      </Box>
    </Box>
  




   
<Box  _hover={{transform: 'scale(1.2)'}} bg={"white"} m="auto" cursor={"pointer"} borderWidth="1px" borderRadius="lg"  boxShadow="md" w={{base:"330px",md:"350px"}}  h="500px">
      <Image h="250px" w="100%" src="https://cdn.pixabay.com/photo/2018/04/03/04/36/hand-3285912_640.jpg" alt="Course Image" objectFit="cover"  />
      <Flex justifyContent="space-between" alignItems="center" p={4}>
      <Text border={"1px solid green"} bg="green.100" p="3px" pl="10px" pr="10px" fontWeight={600} fontSize="sm" color="gray.500">Deliever</Text>
           
      </Flex>
      <Box>
        <Text align={"start"} ml="10px"  borderBottom={"2px solid #f28524"} fontSize="20px"   fontWeight="bold" mb={2}>Software Testing</Text>

        <Flex w="90%" m="auto" justifyContent={"space-between"}>
        <Text fontSize="xl" fontWeight={600} fontStyle={"italic"} color={"#f28524"}  borderBottom={"2px solid #f28524"} mb={2}>By Sarika</Text>
        <Flex mt="8px">
            <Image h="20px" mt="3px" src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/81d82a43-ffee-4918-baa7-24b90af09902' alt='rating image'/>
            <Text fontSize="sm" color="gray.500">(4.5)</Text>
        </Flex>

        
        </Flex >
        <Flex mr="20px" justifyContent={"end"} >
        <Flex  w="30%" borderBottom={"2px solid #f28524"}>
            <Text fontWeight={700} mr="10px">Price</Text>
            <Text fontWeight={700} mr="10px"> : </Text>
            <Text align={"right"}  mr="20px" fontSize="lg" fontWeight="bold" mb={2}>$29</Text>
        </Flex>
        </Flex>
      </Box>
    </Box>
  
</SimpleGrid>
</Box>


{/* Section-5:  software categories  */}
<Box pb="100px" bg="#FFF7EE"> <Heading pt="20px" pb="20px" color={"#f28524"} borderBottom={"1px solid gray"} mb="30px">Top Software Categories</Heading>
<SimpleGrid columns={[1,2,2,4]} w={{base:"90%",md:"90%", lg:"80%"}} m="auto" gap="20px">
{categoryData.map((e)=>{
    return(
<Flex h="100px" border={"1px solid gray"} borderRadius={"20px"} cursor={"pointer"}  _hover={{ bg:"blue.100"}}>
    <Img objectFit={"cover"} border={"1px solid black"} h="60px" ml="20px" mt="20px" borderRadius={"50px"} src={e.Image} alt='' />
    <Text fontSize={"18px"} pt="30px" pl="20px" fontWeight={600}  _hover={{ color:"#f28524"}}>{e.Name}</Text>
</Flex>
    )
})} 

</SimpleGrid>
</Box>

{/* Video */}
<Flex justifyContent={"center"} mt="-50px">
    <Link to={"/video"} >
<Box
      w="100px"
      h="100px"
      borderRadius="50%"
      bg="#1CB098"
      _hover={{bg:"blue.100"}}
      cursor={"pointer"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={BsPlayFill} boxSize={6} color="black" />
    </Box>
    </Link>
    </Flex>




{/* ----Section-7: Employees story ----*/}
<Box bg={"gray.100"} pt="60px" pb="50px" mt="-50px" >
<Heading pb="10px">Our Employees</Heading>
<SimpleGrid columns={[1,2,3]} w="80%" gap="30px" m="auto" pb="20px">
  {
    storyData && storyData.map((item)=>{
      return(
        <Box  bg="white" border={1} borderRadius={"20px"}  p={'5px'}> 
    <Text mt="20px">{item.story}</Text>
    <Text mt="30px" fontWeight={600}>~{item.Name}</Text>
</Box>
      )
    })
  }


</SimpleGrid>
</Box>



{/*Section 8:Last section*/}
<Box  h={{base:"200px",lg:"400px"}} bgSize={"100%"} bgRepeat={"no-repeat"} bgImage={"https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_640.png"}>
<Box w={{base:"100%",md:"70%",lg:"40%"}}  pt={{lg:"50px"}} ml={{lg:"50px"}}>
     <Text fontSize={{base:"15px",md:'25px',lg:'30px'}} fontWeight={700} color={'black'}>The trusted market leader in talent transformation through education </Text>
     <Text fontSize={{base:"10px",md:'20px',lg:'20px'}} color={'gray.700'}>The trusted market leader in talent transformation. </Text> 
      </Box>
</Box>



    </Box>
  )
}



