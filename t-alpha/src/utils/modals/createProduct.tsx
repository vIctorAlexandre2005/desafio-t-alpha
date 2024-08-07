import { CreateProduct } from "@/Components/CreateProduct";
import { CreateModalProps } from "@/interface";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input, Flex } from "@chakra-ui/react";

export function CreateProductModal({ onClose, isOpen }: CreateModalProps) {
    return (
        <Modal isCentered size={"xl"} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w={"100%"}>
                <ModalHeader>Create Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <CreateProduct />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}