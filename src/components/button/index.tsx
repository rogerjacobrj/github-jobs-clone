import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
    buttonType: string;
}
const ButtonItem = styled.button`
    ${(props: ButtonProps) => props.buttonType && css`
        margin-top: 18px;
        height: 32px;
        padding: 0 20px;
        line-height: 32px;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 12px;
        font-weight: bold;
        color: #FFF;
        text-shadow: -1px -1px 0 rgb(0 0 0 / 30%);
        background: #869ca9;
        background: -webkit-gradient(linear, left top, left bottom, from(#a2b8c5), to(#869ca9));
        background: -moz-linear-gradient(top, #a2b8c5, #869ca9);
        border: none;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background: -webkit-gradient(linear, left top, left bottom, from(#8cb8cd), to(#6a9cb6));
        }
    `}
`;

const Button = (props: any) => {
    const { text, buttonType } = props;

    return (
        <ButtonItem type="button" buttonType={buttonType}>{text}</ButtonItem>
    );
};

export default Button;