import React from "react";
import styled, { css } from "styled-components";

interface ButtonStyleProps {
    buttonType: string;
}

const ButtonItem = styled.button`
    width: 100%;

    ${(props: ButtonStyleProps) => props.buttonType === "search" && css`
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
        background: -webkit-gradient(linear, left top, left bottom, from(#A2B8C5), to(#869CA9));
        background: -moz-linear-gradient(top, #A2B8C5, #869CA9);
        border: none;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background: -webkit-gradient(linear, left top, left bottom, from(#8CB8CD), to(#6A9CB6));
        }
    `}

    ${(props: ButtonStyleProps) => props.buttonType === "clickEvent" && css`
        padding: 0 5px;
        line-height: 27px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: #fff;
        font-size: 12px;
        text-shadow: -1px -1px 0 #2371a3;
        background: #1e81bf;
        border: none;
        outline: none;
        background: -webkit-gradient(linear, left top, left bottom, from(#46a9e7), to(#1e81bf));
        background: -moz-linear-gradient(top, #46a9e7, #1e81bf);
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-text-stroke: 1px transparent;

        &:hover {
            background: -webkit-gradient(linear, left top, left bottom, from(#2b91e2), to(#125db3));
        }
    `}
`;

interface ButtonProps {
    text: string;
    buttonType: string;
    clickEvent?: boolean;
    clickHandler: () => void;
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    const { text, buttonType, clickEvent, disabled, clickHandler } = props;

    const onButtonClick = () => {
        clickHandler();
    };

    return (
        <ButtonItem type="button" disabled={disabled} buttonType={buttonType} onClick={() => {
            return clickEvent === true && onButtonClick()
        }}>
            {text}
        </ButtonItem>
    );
};

export default Button;