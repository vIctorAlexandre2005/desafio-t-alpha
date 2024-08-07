import { logout } from "@/utils/authenticator";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {

    const router = useRouter();

    function handleLogout() {
        logout();
        router.push('/login');
    };

    return (
        <HStack borderBottom={"1px"} borderColor={"gray.200"} p={2} bg={"gray.100"} justify={"space-around"} display={"flex"}>
            <Text fontFamily={"Arial"} fontWeight={600} fontSize={"2xl"}>Challenge - T-Alpha</Text>
            <Button
                display={router.pathname === '/' ? 'flex' : 'none'}
                _hover={{ bg: "red.600" }}
                bg={"red.500"}
                color={"white"}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </HStack>
    )
}