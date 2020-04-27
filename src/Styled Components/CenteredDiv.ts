import styled from "styled-components"
interface CenteredDivProps {
    width?: string;
    height?: string;
}
export const CenteredDiv = styled.div<CenteredDivProps>`
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`