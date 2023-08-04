import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormLabel,
    Heading,
    Image,
    Input,
 
    Stack,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
  
  function Login() {
    const toast = useToast();
    const nav = useNavigate()
    const [data, setData] = useState({
      email: "",
      password: "",
    });
    const { email, password } = data;
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
      if (data.email === "guptasaira34@gmail.com" && data.password === "sarika") {
        toast({
          position: 'top-left',
          title: 'Hello Admin!👤',
          status: 'success',
          description: "Welcome to Dashboard"
        })
        localStorage.setItem('loginData',JSON.stringify(data.email))
        nav('/dashboard')
      } else {
        toast({
          position: 'top-left',
          title: 'Hello User!😊',
          status: 'success',
          description: 'Welcome to Software World'
        })
        nav('/')
      }
    };
  
    useEffect(() => {
      console.log(data);
    });
  
    return (
      <Box m={"auto"} mt={"100px"}  >
     <Flex w={{base:"90%",md:"80%",lg:'50%'}} h='auto' m={'auto'} border={'2px solid black'} borderRadius={"20px"} direction={{base:"column",md:"row",lg:"row"}}>
        <Box bg="#85C1E9" w={{base:'100%',md:'40%',lg:'40%'}} borderTopRightRadius={{base:'19px',md:'0px',lg:'0px'}} borderTopLeftRadius={"19px"} borderBottomLeftRadius={{base:'0px',lg:'19px'}} > 
        <Image   src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/5d7092c9-4ca0-4515-85be-1713bcd0ec13'/>
        </Box>
        <Box ml="20px" w={{base:'90%',md:'40%',lg:'50%'}}>
            <Heading pt={'5px'} fontSize={"20px"}>Login here</Heading>
            <Box>
              <FormLabel>Email:</FormLabel>
              <Input
              
               color={"black"}
                border={"2px solid gray"}
                type="email"
                name="email"
                placeholder="Username"
                value={email}
                onChange={handleChange}
              />
            </Box>
  
            <Box>
              <FormLabel>Password:</FormLabel>
              <Input
                color={"black"}
                border={"2px solid gray"}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </Box>
            
            <Box mt={'10px'}>
            <Stack>
                <Checkbox colorScheme="green" defaultChecked>
                      Remeber me!
                </Checkbox>
              </Stack>
              </Box>
           
              <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"center"}
                
              >
                <Box>
                  {/* Button */}
                  <Button
                    p={"5px"}
                    mt={"10px"}
                    border={"1px solid teal"}
                    w={"100px"}
                    color={"black"}
                    bg={" #EAEDED "}
                    fontSize={"18px"}
                    fontWeight={"600"}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
  
                <Box  display={'flex'} justifyContent={'left'}>
                  <Text
                    fontSize={"15px"}
                    mt={"15px"}
                    mb={"10px"}
                    align="end"
                    fontWeight={"400"}
                    color={"red"}
                  >
                    Forget Password? <a href="/signin">Recover now!</a>{" "}
                  </Text>
                  </Box>
                </Box>
  
              </Box>
          
          </Box>
      </Flex>
  
  
      </Box>
    );
  }
  
  export default Login;