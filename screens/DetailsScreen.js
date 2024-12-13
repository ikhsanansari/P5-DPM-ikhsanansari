import React from 'react';
import { Button, Center, Box, Heading, Text } from 'native-base';

const Login = ({ navigation }) => {
  return (
    <Center w="100%" h="100%" bg="white">
      <Box safeArea p="4" w="90%" maxW="300" alignItems="center">
        {/* Welcome Message */}
        <Heading size="md" fontWeight="bold" color="black" textAlign="center" mb="1">
          SELAMAT DATANG
        </Heading>
        <Text fontSize="lg" fontWeight="medium" color="black" textAlign="center" mb="6">
          STUDENT
        </Text>

        {/* Button */}
        <Button
          mt="6"
          bg="cyan.400"
          borderRadius="full"
          _pressed={{ bg: "cyan.500" }}
          onPress={() => console.log('Ikhsan Ansari Button Pressed')}
        >
          Ikhsan Ansari
        </Button>
      </Box>
    </Center>
  );
};

export default Login;
