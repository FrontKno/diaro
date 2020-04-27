import React, { ReactElement } from 'react';
import { Logo } from '../../Styled Components/Logo';
import { CenteredDiv } from '../../Styled Components/CenteredDiv';
import { Input } from '../../Project D UI/Input/Input';
import styled from 'styled-components';
import { Button } from '../../Project D UI/Button/Button';
const AuthWindow = styled(CenteredDiv)`
    flex-direction: column;
    justify-content: center;
`;

export default function Auth(): ReactElement {
    return (
        <AuthWindow>
            <Logo className="auth-logo">Diary</Logo>
            <Input type="text" label="Login: " placeholder="Enter your login" />
            <Input
                type="password"
                label="Password: "
                placeholder="Enter your password"
            />
            <Button width="140px" height="60px">
                Sign In
            </Button>
        </AuthWindow>
    );
}
