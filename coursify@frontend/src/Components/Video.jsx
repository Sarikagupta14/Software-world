import { Box } from '@chakra-ui/react';
import React from 'react'

export const Video = () => {
  return (
    <Box
    as="video"
    width="97%"
    m="auto"
    mt="60px"
    mb="50px"
    _hover={{ all: "none" }}
    borderRadius={"20px"}
    objectFit={{base:"cover",lg:"inherit"}}
    height={{ base: "200px", md: "400px", lg: "600px" }}
    autoPlay
    loop
    onEnded={(e) => {
      e.target.currentTime = 0; // Reset video playback
      e.target.play(); // Start playing again
    }}
  >
    <source src="https://cdn.pixabay.com/vimeo/764387696/business-136271.mp4?width=1280&hash=92223d0979d2952f30dd9a794722b87e50a19158" />
  </Box>

  )
}
