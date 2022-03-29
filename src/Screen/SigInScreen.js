import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../Config/FireBase';

const auth = getAuth(app);

import {Center, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack} from 'native-base'

import AppButton from '../Components/AppButton'

function SigInScreen() {
      const [email,setEmail]=useState();
      const [password,setPassword]=useState();

      const handleSignUp = async ()=>{
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            if(result) console.log(result);
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Login
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input placeholder='email' onChangeText={(text)=>setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" placeholder='password' onChangeText={(text)=>setPassword(text)}  />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button colorScheme="indigo" m='2' maxW={200} onPress={()=>handleSignUp()}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link  _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}

export default SigInScreen