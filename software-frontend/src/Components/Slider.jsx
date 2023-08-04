

import React, { useEffect, useState } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";

const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://software-backend.onrender.com/slider");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box>
      <Box position="relative" h={{ base: "200px", md: "350px", lg: "600px" }}>
        <Image
          boxSize={"100%"}
          objectFit="fill"
          src={data[counter].url}
          alt=""
          m={"auto"}
          width={"90%"}
          className="darken"
        />
      </Box>

      <Box
        w={{ base: "90%", md: "90%", lg: "30%" }}
        mt={{ base: "-200px", md: "-200px", lg: "-450px" }}
        position={"absolute"}
        ml={{ base: "15px", lg: "900px" }}
      >
        <Text fontWeight={"700"} fontSize={{ base: "20px", md: "30px", lg: "40px" }} color={"#ffffff"}>
          Find IT here.
        </Text>
        <Text
          as={"span"}
          fontWeight={"600"}
          fontSize={{ base: "20px", md: "30px", lg: "35px" }}
          fontFamily={"cursive"}
          color={"#DC7633 "}
        >
          Get the dream job you deserve.
        </Text>
        <Box>
          <Button mt={"20px"}>Apply Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;