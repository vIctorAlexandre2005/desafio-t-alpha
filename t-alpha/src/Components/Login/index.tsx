import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/utils/authenticator';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, Link, Text } from '@chakra-ui/react';

export function Login() {
  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(taxNumber, password);
      router.push('/');
    } catch (error) {
      console.error('Erro no login:', error);
    };
  };

  return (
    <Flex justify={"center"} mt={"10rem"}>
      <Card justify={"center"} display={"flex"} w={"35%"}>
        <CardHeader>
          <Heading fontSize={"2xl"}>Sing in</Heading>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardBody>
            <Text>CPF or CNPJ</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Tax Number"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
            <Text>Password</Text>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text mt={4}>
              Don't have an account? <Link color={"green.600"} fontWeight={"bold"} href="/register">Register here</Link>
            </Text>
          </CardBody>

          <CardFooter w={"100%"}>
            <Button
              w={"100%"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500"
              }}
              type="submit"
            >
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
