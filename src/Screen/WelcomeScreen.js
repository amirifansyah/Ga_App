import React from "react";
import { Box, Button, Text, Center } from "native-base";

function WelcomeScreen({ navigation }) {
  return (
    <Box safeArea>
      <Center>
        <Text>WelcomeScreen</Text>
        <Text>Image Slider Here</Text>
        <Button margin={2} onPress={() => navigation.navigate("login")}>
          Login
        </Button>
        <Button margin={2} onPress={() => navigation.navigate("signup")}>
          signup
        </Button>
      </Center>
    </Box>
  );
}

export default WelcomeScreen;