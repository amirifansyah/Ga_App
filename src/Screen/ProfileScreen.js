import React from 'react'
import { getAuth,signOut } from "firebase/auth";
import { app } from '../../Config/FireBase';

import useAuthentication from '../Api/useAuthentication';
import { Box, Center } from 'native-base';

const auth=getAuth(app);

function ProfileScreen() {
    const user=useAuthentication();
  return (
    <Box>
        <Center>
            <Text>hi {user?.email}</Text>
            <Button maxWidth={200} onPress={() => signOut(auth)}>Logout</Button>
        </Center>
    </Box>
  )
}

export default ProfileScreen