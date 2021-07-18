import { Box, Flex, IconButton, useBoolean } from "@chakra-ui/react";
import React from "react";

type SelectIconProps = {
    size?: string,
    currentIconId: number,
    icons: Array<JSX.Element>,
    onSelectIcon: (iconId: number) => void,
}

export default function SelectIcon(props: SelectIconProps) {
    const { size, currentIconId, icons, onSelectIcon } = props;
    const [isOpen, setIsOpen] = useBoolean();

    const handleSelectIcon = (iconId: number) => {
        setIsOpen.off();
        onSelectIcon(iconId);
    };

    const handleKeyDown = ({ key }: React.KeyboardEvent) => {
        switch (key) {
            case 'ArrowDown':
                onSelectIcon(Math.min(icons.length - 1, currentIconId + 1));
                break;
            case 'ArrowUp':
                onSelectIcon(Math.max(0, currentIconId - 1));
                break;
        }
    }

    return (
        <Box position='relative'>
            <IconButton
                boxSize={size}
                aria-label='selected-icon'
                variant='purpleSolidIcon'
                icon={icons[currentIconId]}
                onClick={setIsOpen.toggle}
                onBlur={setIsOpen.off}
                onKeyDown={handleKeyDown}
            />
            <Flex bg='itemBg' direction='column'
                position='absolute' top='60px'
                borderRadius='8px' hidden={!isOpen}
            >
                {icons.map((icon, i) =>
                    <IconButton
                        key={`icon-${i}`}
                        aria-label={`icon-${i}`}
                        variant='purpleSolidIcon'
                        boxSize={size}
                        icon={icon}
                        tabIndex={-1}
                        _hover={{ borderColor: 'mainPurple' }}
                        onMouseDown={() => handleSelectIcon(i)}
                    />
                )}
            </Flex>
        </Box>
    );
}