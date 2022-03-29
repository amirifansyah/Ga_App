import { Box, Text, ScrollView, Button, Center } from 'native-base'
import React from 'react'
import AppButton from '../Components/AppButton'
import AppCard from '../Components/AppCard'
import AppFeedCard from '../Components/AppFeedCard'

function RequestScreen() {
  return (
    <ScrollView h="80" _contentContainerStyle={{
      px: "20px",
      mb: "4",
      minW: "72"
  }}>
      <Box>
        {/* <Button>Create New Request</Button> */}
        {/* <Button small primary>
          <Text>Default Small</Text>
      </Button> */}
      <Center ml="40">
      <AppButton></AppButton>
      </Center>
        <AppCard>

        </AppCard>
      
        <AppCard></AppCard>
      
        <AppCard></AppCard>
      
        <AppCard></AppCard>
      
        <AppCard></AppCard>
      
        <AppCard></AppCard>
      
        <AppCard></AppCard>
      </Box>
    </ScrollView>
  )
}

export default RequestScreen