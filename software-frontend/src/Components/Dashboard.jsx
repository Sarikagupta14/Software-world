import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import StoryData from './Admin/StoryData';

import CategoryData from './Admin/CategoryData';
import SliderData from './Admin/SliderData';
import ContactList from './Admin/ContactList';

const Dashboard = () => {
    
const [activeComponent, setActiveComponent] = useState("Slider");
const handleComponent = (componentName) => {
    setActiveComponent(componentName);
};
  console.log(activeComponent)
  return (
    <Box mt={'100px'} >
      <Flex>
       
       <Flex direction={'column'} w={'10%'} h={'100vh'} gap={'20px'}>
       <Button bg={'gray.100'} w={'90%'} border={'1px solid black'} fontSize={'18px'} onClick={()=>handleComponent('Slider')}>Slider</Button>
      <Button bg={'gray.100'}  w={'90%'} border={'1px solid black'} fontSize={'18px'} onClick={()=>handleComponent('Category')}>Category</Button>
      <Button bg={'gray.100'}  w={'90%'} border={'1px solid black'} fontSize={'18px'} onClick={()=>handleComponent('Story')}>Story</Button>
      <Button bg={'gray.100'}  w={'90%'} border={'1px solid black'} fontSize={'18px'} onClick={()=>handleComponent('Contact')}>Contact</Button>
       
       
       
       </Flex>
       <Box w={'80%'} h={'100vh'}  overflow={'scroll'}>
        {activeComponent === 'Slider' &&  <SliderData/>}
        {activeComponent === 'Category' &&  <CategoryData/>}
        {activeComponent === 'Story' &&  <StoryData/>}
        {activeComponent === 'Contact' &&  <ContactList/>}
        </Box>


      </Flex>

    </Box>
  )
}

export default Dashboard
