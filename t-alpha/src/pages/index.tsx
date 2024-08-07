import { useContextGlobal } from "@/Components/Context";
import { Loader } from "@/Components/Loader";
import { ProductList } from "@/Components/ProductsList";
import { getToken, logout } from "@/utils/authenticator";
import { CreateProductModal } from "@/utils/modals/createProduct";
import { getProducts } from "@/utils/products";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IoCreateOutline } from "react-icons/io5";

export default function Home() {
  const { productData, setProductData } = useContextGlobal();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = getToken();
        if (!token) {
          router.push('/login');
          return;
        }
        const productsData = await getProducts();
        setProductData(productsData);
      } catch (error: any) {
        if (error.response?.status === 401) {
          logout();
          router.push('/login');
        } else {
          console.error('Erro ao carregar produtos:', error.response?.data || error.message);
        }
      }
    };
    fetchProducts();
  }, [router]);

  return (
    <Flex direction={"column"}>
      <Flex borderBottom={"1px solid"} borderColor={"gray.200"} justify={"space-between"} w={"100%"} padding={"1rem"}>
        <Text
          fontSize={"2xl"}
          fontWeight={"600"}
        >
          Products created
        </Text>
        <Button 
          bg={"green.500"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          gap={2}
          _hover={{ bg: "green.600" }}
          onClick={onOpen}
        >
          Create Product <IoCreateOutline size={24} />
        </Button>
        {isOpen && <CreateProductModal isOpen={isOpen} onClose={onClose} />}
      </Flex>
      <Box w={"100%"} h={"100%"} flexDir={"column"} display={"flex"} justifyContent={"center"} p={4}>
        {productData?.length > 0 ? (
          <ProductList />
        ) : (
          <Loader />
        )}
      </Box>

    </Flex>
  );
}
