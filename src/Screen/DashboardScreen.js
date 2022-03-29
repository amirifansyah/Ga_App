import React from 'react'
import {Text, Box, Button} from 'native-base'
import { getAuth,signOut } from "firebase/auth";
import { app } from '../../Config/FireBase';

import useAuthentication from '../Api/useAuthentication'
const auth=getAuth(app);

function DashboardScreen() {
    const user=useAuthentication();
  return (
      <Box>
      <Text>DashboardScreen</Text>
      <Button maxWidth={200} onPress={() => signOut(auth)}>Logout</Button>
      </Box>
  )
}

export default DashboardScreen