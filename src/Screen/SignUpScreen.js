import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from '../../Config/FireBase'

const auth = getAuth(app);

import {FormControl,VStack, Center, Box, Button, Heading, Input} from 'native-base';

function SignUpScreen() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const handleSignUp = async ()=>{
      try{
          const result = await createUserWithEmailAndPassword(auth, email, password);
          if(result) console.log('SUCCESSp[');
      }
      catch(error){
          console.log(error)
      }
  }


  return (
    <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290" py="8">
      <Heading size="lg" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
      color: "warmGray.200"
    }} fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={(text) => setEmail(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" onChangeText={(text) => setPassword(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={()=>handleSignUp()}>
          Sign up
        </Button>
      </VStack>
    </Box>
  </Center>
  )
}

export default SignUpScreen