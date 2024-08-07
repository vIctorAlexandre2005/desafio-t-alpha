import { deleteProduct, getProducts } from '@/utils/products';
import { useEffect, useState } from 'react';
import { UptadetComponent } from '../../utils/modals/UptadetComponent';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import { formattedValueBRL } from '@/utils/formattedBRL';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { useContextGlobal } from '../Context';

export function ProductList() {
  const { productData, setProductData } = useContextGlobal();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = async (id: number) => {
    if (!id) {
      console.error('ID do produto é inválido.');
      return;
    }
    try {
      await deleteProduct(id);
      setProductData(productData.filter(product => product?.id !== id));
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    };
  };

  const handleEdit = (product: any) => {
    setSelectedProduct(product);
    onOpen();
  };

  return (
    <SimpleGrid flexWrap={"wrap"} columns={{ base: 1, md: 2, lg: 3 }} spacingX='40px' spacingY='20px'>
      {productData.map((product) => (
        <Card
          flexDir={"column"}
          key={product.id}
          bg="white"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={4}
          w={"100%"}
        >
          <CardHeader mb={4} p={0}>
            <Text fontWeight={500} fontSize={"2xl"}>{product.name}</Text>
          </CardHeader>

          <CardBody mb={4} p={0}>
            <Text fontSize={"1rem"}>Descrição: {product.description}</Text>
            <Text fontSize={"1rem"}>Preço: {formattedValueBRL.format(product.price)}</Text>
            <Text fontSize={"1rem"}>Estoque: {product.stock}</Text>
          </CardBody>
          <Divider color={"gray.300"} mb={4} />
          <CardFooter mb={4} p={0}>
            <Box display={"flex"} gap={2}>
              <Button
                w={"100%"}
                bg={"green.500"}
                color={"white"}
                _hover={{
                  bg: "green.600"
                }}
                gap={2}
                onClick={() => handleEdit(product)}
              >
                <BiEdit size={24} /> Edit 
              </Button>
              <Button
                w={"100%"}
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "red.600"
                }}
                gap={2}
                onClick={() => handleDelete(product.id)}
              >
                Delete <BiTrash size={24} />
              </Button>
            </Box>
          </CardFooter>
        </Card>
      ))}
      {isOpen && selectedProduct && (
        <UptadetComponent
          onClose={onClose}
          product={selectedProduct}
        />
      )}
    </SimpleGrid>
  );
};
