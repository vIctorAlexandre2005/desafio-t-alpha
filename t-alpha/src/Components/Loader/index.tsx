import { Box, Text } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export function Loader() {
    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
            bg={"transparent"}
            mt={10}
        >
            <PulseLoader size={30} speedMultiplier={1} color="#3b8" />
            <Text>Carregando produtos... Por enquanto não achamos nada.</Text>
        </Box>
    )
}