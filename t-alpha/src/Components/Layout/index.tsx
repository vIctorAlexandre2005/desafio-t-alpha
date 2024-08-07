import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

type ChildrenProps = {
    children: React.ReactNode
}

export function Layout({ children }: ChildrenProps) {
    return (
        <Box h={"100vh"} bg={"whitesmoke"} w={"100%"}>
            <Header />
            {children}
        </Box>
    )
}