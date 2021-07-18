const purpleSolid = {
    background: 'mainPurple',
    color: 'windowBg',
    border: '2px solid transparent',
    borderRadius: '16px',
    padding: '14px 56px',
    _hover: {
        background: '#8674B9',
    },
    _active: {
        background: '#6B55AA',
    },
    _focus: {
        boxShadow: 'none',
    },
    _focusVisible: {
        boxShadow: '0 0 0 2px var(--chakra-colors-mainPurple)',
        borderColor: 'windowBg',
    },
};

const purpleOutline = {
    background: 'transparent',
    color: 'mainPurple',
    border: '1px solid var(--chakra-colors-mainPurple)',
    borderRadius: '16px',
    padding: '14px 56px',
    _hover: {
        background: '#8674b90f',
    },
    _active: {
        background: '#6b55aa26',
    },
    _focus: {
        boxShadow: 'none',
    },
    _focusVisible: {
        boxShadow: '0 0 0 2px var(--chakra-colors-mainPurple)',
    },
};

const purpleSolidIcon = {
    background: 'itemBg',
    border: '1px solid transparent',
    borderRadius: '8px',
    _hover: {
        boxShadow: '0 0 0 1px var(--chakra-colors-mainPurple)',
    },
    _focus: {
        boxShadow: '0 0 0 1px var(--chakra-colors-mainPurple)',
        borderColor: 'mainPurple',
    },
};

const purpleOutlineIcon = {
    background: 'transparent',
    color: 'whiteLargeAlpha',
    border: '1px solid transparent',
    borderRadius: '8px',
    _hover: {
        color: 'mainPurple',
    },
    _focus: {
        boxShadow: 'none',
    },
    _focusVisible: {
        borderColor: 'mainPurple',
    },
};

const Button = {
    variants: {
        purpleSolid,
        purpleOutline,
        purpleSolidIcon,
        purpleOutlineIcon,
    },
};

export default Button;