import styled from "@emotion/styled";

export const RedInput = styled.input`
    border-color: black;
`

interface IProps{
    rrr: string
    zzz: boolean
}

export const BlueButton = styled.button`
    font-size: ${(props:IProps) => props.rrr}
    background-color: ${(props:IProps) => props.zzz ? "yellow" : "blue"};
`

