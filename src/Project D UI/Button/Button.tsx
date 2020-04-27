import React from 'react';
import styled from 'styled-components';

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    width?: string;
    height?: string;
}

interface StyledButtonProps {
    width?: string;
    height?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    outline: none;
    cursor: pointer;
    border: 1px solid black;
    margin: 15px auto;
    font-family: 'Playfair Display', serif;
    font-size: 1.1em;

    transition: all ease-in-out 150ms;
    &:hover {
        background-color: rgb(240, 240, 240);
        transform: scale(1, 1.1);
    }
    &:active {
        background-color: rgb(240, 240, 240);
        transform: scale(1.1, 1.1);
    }
`;

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton width={props.width} height={props.height}>
            {props.children}
        </StyledButton>
    );
};
