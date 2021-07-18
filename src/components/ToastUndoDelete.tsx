import { Box, Center, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Info, Undo } from "../icons/24p";

type ToastUndoDeleteProps = {
    onUndoDelete: () => void,
}

export default function ToastUndoDelete(props: ToastUndoDeleteProps) {
    const { onUndoDelete } = props;
    return (
        <Center w='400px' h='80px' bg='whiteLargeAlpha' p='0 36px'
            borderRadius='30px' justifyContent='space-between'
        >
            <Info color='mainRed' />
            <Box>
                <Text fontSize='18px' color='mainRed'>
                    Achievement deleted
                </Text>
                <Text fontSize='14px' color='mainBg'>
                    Undo
                </Text>
            </Box>
            <IconButton
                aria-label='undo-button'
                variant='outlined'
                icon={<Undo color='mainBg' />}
                onClick={onUndoDelete}
            />
        </Center>
    );
}