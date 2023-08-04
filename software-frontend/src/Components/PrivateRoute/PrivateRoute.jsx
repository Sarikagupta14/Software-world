import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    
    const data = JSON.parse(localStorage.getItem('loginData'))
      console.log(data)

      const access = data ? true : false
      if(access ){
          return children
      }
      else{
        // nav('/signup')
        <Navigate to='/'replace/>
      }
  }


export default PrivateRoute
