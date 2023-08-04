import { Box, Flex, Button, IconButton, useDisclosure, Image, Text } from '@chakra-ui/react';
import { Link} from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  

 

  return (
    <Box  position="fixed" top={0} left={0} right={0} zIndex={999}>
    <Box color={"#f28524"} fontWeight={600} bg="#0E2A47"> <Text as={"span"} color={"white"}>Welcome to </Text>Software World, Get Your first Job here !</Box>
    <Box  bg="#5D6D7E " h="80px" w="100%" >
      <Flex alignItems="center" justifyContent="space-between">
        <Link to={"/"}>
        <Image h="85px" w={'90px'} ml="30px" src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/5d7092c9-4ca0-4515-85be-1713bcd0ec13" alt="Logo"  />
        </Link>
        <Flex display={{ base: 'none', md: 'none',lg:"flex" }} justifyContent="space-between" w="75%">
        
        <Flex  justifyContent="space-around" gap="40px" pt="15px" fontWeight={600}>
        <Link to={"/"}><Button _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Home</Button> </Link>
        <Link to="/about"><Button _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>About Us</Button></Link>  
       
         {/* <Button _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Placement</Button>  */}
          <Button _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Career</Button>
        <Link to="/contact"><Button _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Contact</Button></Link> 
        <Link to={'/center'}><Button _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Authorized Center</Button></Link> 
        </Flex> 
    
      <Link to={'/login'}><Button mr="30px" mt="5px" _hover={{bg:"transparent", color:"#f28524"}} leftIcon={<FaUser />} size="md">
      Login
    </Button>
    </Link> 
 
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          mr="10px" 
          color={"black"}
          bg="transparent"
          aria-label="Open Menu"
          display={{ base: 'block', md: 'block', lg: 'none' }}
          onClick={onToggle}
        />
      </Flex>
      <Flex
        spacing={6}
        display={{ base: isOpen ? 'flex' : 'none', md: isOpen ? 'flex' : 'none' }}
        
        pl="30px"
        bg="white"
        flexDirection="column"
        fontWeight={600}
        alignItems={"start"}
      >
        <Link to={'/'}><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Home</Text></Link>
        <Link to="/about"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>About Us</Text></Link> 
          
        <Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Placement</Text> 
        <Link to="/career"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Career</Text></Link>  
       <Link to="/contact"> <Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Contact</Text></Link>
       <Link to="/center"><Text _hover={{ color:"#f28524",borderBottom:"2px solid #f28524"}}>Authorized Center</Text></Link>
        
       <Link to={'/login'}>
      <Button ml="-20px" bg="transparent" mr="30px" mt="5px" _hover={{bg:"transparent", color:"#f28524"}} leftIcon={<FaUser />} size="md">
      Login
    </Button>
    </Link>
  
      </Flex>
    </Box>
    </Box>
  );
};

export default Navbar;
