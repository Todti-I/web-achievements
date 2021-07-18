import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import Button from "./Button";
import Input from "./Input";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
        mono: 'Inter, sans-serif',
    },
    colors: {
        mainBg: '#1D1D20',
        windowBg: '#29292D',
        itemBg: '#35353B',
        mainPurple: '#A395CA',
        mainRed: '#F93232',
        whiteSmallAlpha: 'rgba(250, 250, 250, 0.38)',
        whiteMediumAlpha: 'rgba(250, 250, 250, 0.6)',
        whiteLargeAlpha: 'rgba(255, 255, 255, 0.87)',
    },
    components: {
        Input,
        Button,
    }
});

export default theme;