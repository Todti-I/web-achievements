const purpleOutline = {
    field: {
        background: '#35353B',
        border: '1px solid transparent',
        borderRadius: '8px',
        padding: '14px',
        textColor: 'whiteLargeAlpha',
        _hover: {
            boxShadow: '0 0 0 1px var(--chakra-colors-mainPurple)',
        },
        _focus: {
            boxShadow: '0 0 0 1px var(--chakra-colors-mainPurple)',
            borderColor: 'mainPurple'
        },
        _placeholder: {
            color: 'whiteMediumAlpha',
        },
    },
}

const Input = {
    variants: {
        purpleOutline,
    },
};

export default Input;