import React from 'react';
import styled from 'styled-components';

interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
}

const Label = styled.label`
    display: flex;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 40px;
    cursor: pointer;
    span {
        flex-grow: 1;
        min-width: 120px;
        font-size: 1.3em;
        line-height: 40px;
    }
    input {
        flex-grow: 2;
        min-width: 200px;
        font-family: 'Playfair Display', serif;

        font-style: italic;
        font-size: 1em;
        height: 100%;
        padding-left: 10px;
        transition: all ease-in-out 150ms;
    }
    ::placeholder {
        font-family: 'Playfair Display', serif;
        opacity: 0.8;
        font-weight: 100;
        font-style: italic;
    }
`;

export const Input = (props: InputProps) => {
    return (
        <Label>
            <span>{props.label}</span>
            <input type={props.type} placeholder={props.placeholder}></input>
        </Label>
    );
};
