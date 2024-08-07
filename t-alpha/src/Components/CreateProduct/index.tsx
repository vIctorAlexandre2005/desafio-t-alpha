import { createProduct } from '@/utils/products';
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

export function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emptyFields = !name || !description || !price || !stock;
    try {
      if (emptyFields) {
        alert('Preencha todos os campos');
      } else {
        await createProduct({ name, description, price, stock });
        window.location.reload();
      };
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <Box display={"flex"} justifyContent={"center"} w={"100%"}>
      <form onSubmit={handleSubmit}>
        <Flex flexDir={"column"} align={"center"} w={"100%"} p={4} justify={"center"} gap={4}>
          <Box gap={4} display={"flex"} w={"100%"}>
            <Box w={"100%"}>
              <Text>Product Name</Text>
              <Input
                mb={4}
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box w={"100%"}>
              <Text>Product Description</Text>
              <Textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                resize={"none"}
              />
            </Box>
          </Box>

          <Box gap={4} display={"flex"} w={"100%"}>

            <Box w={"100%"}>
              <Text>Product Price</Text>
              <Input
                mb={4}
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </Box>

            <Box w={"100%"}>
              <Text>Stock</Text>
              <Input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(parseInt(e.target.value))}
              />
            </Box>
          </Box>
          <Box w={"100%"}>
            <Button
              w={"100%"}
              _hover={{ bg: "green.600" }}
              bg={"green.500"}
              color={"white"}
              onClick={handleSubmit}
            >
              Create
            </Button>
          </Box>
        </Flex>

      </form>
    </Box>
  );
}
