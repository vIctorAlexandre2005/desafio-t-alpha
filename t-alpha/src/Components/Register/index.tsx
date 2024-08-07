import { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '@/utils/authenticator';
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, Text } from '@chakra-ui/react';

export function RegisterComponent() {
  const [name, setName] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, taxNumber, mail, phone, password);
      router.push('/login');
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };

  return (
    <Flex justify={"center"} mt={6}>
      <Card justify={"center"} display={"flex"} w={"35%"}>
        <CardHeader>
          <Heading fontSize={"2xl"}>Register</Heading>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <Text>Name</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Text>CPF or CNPJ</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Tax Number"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
            <Text>E-mail</Text>
            <Input
              mb={4}
              type="text"
              placeholder="E-mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <Text>Phone</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Text>Password</Text>
            <Input
              mb={4}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardBody>
          <CardFooter>
            <Button 
              bg={"green.400"} 
              color={"white"} 
              _hover={{ bg: "green.500" }}
              type="submit"
            >
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
