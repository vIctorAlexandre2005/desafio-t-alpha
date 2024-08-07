import { updateProduct } from "@/utils/products";
import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Flex, Text, Textarea } from "@chakra-ui/react";
import { ProductModalProps } from "@/interface";

export function UptadetComponent({ product, onClose }: ProductModalProps) {
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price);
  const [stock, setStock] = useState(product?.stock);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const update = {
        name: name,
        description: description,
        price: price,
        stock: stock
      };
      await updateProduct(product.id, update);
      onClose();
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product.');
    }
  };

  return (
    <Modal isCentered size={"xl"} isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleUpdate}>
            <Text>Product Name</Text>
            <Input
              mb={4}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
            />
            <Text>Product Description</Text>
            <Textarea
              mb={4}
              resize={"none"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product Description"
            />
            <Text>Product Price</Text>
            <Input
              mb={4}
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              placeholder="Product Price"
            />
            <Text>Product Stock</Text>
            <Input
              mb={4}
              type="number"
              value={stock}
              onChange={(e) => setStock(parseInt(e.target.value))}
              placeholder="Product Stock"
            />
            <Flex gap={4} justify={"center"} w={"100%"}>
              <Button
                w={"100%"}
                bg={"green.500"}
                color={"white"}
                _hover={{ bg: "green.700" }}
                type="submit"
              >
                Update Product
              </Button>

              <Button
                _hover={{ bg: "red.700" }}
                w={"100%"}
                bg={"red.600"}
                color={"white"}
                onClick={onClose}
              >
                Close
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
