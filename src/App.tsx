import React from "react"
import { ChakraProvider, Center } from "@chakra-ui/react"
import AchievementsWindow from "./components/AchievementsWindow/AchievementsWindow"
import theme from "./theme/theme";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Center minH='100vh' bg='mainBg'>
            <AchievementsWindow />
        </Center>
    </ChakraProvider>
);
