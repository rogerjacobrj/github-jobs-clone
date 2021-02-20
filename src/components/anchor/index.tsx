import React from "react";
import styled, { css } from "styled-components";

interface AnchorProps {
    applyStyle?: boolean;
    color: string;
}

const AnchorItem = styled.a`
    ${(props: AnchorProps) => props.applyStyle && css`
        color: ${(props: AnchorProps) => props.color};
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 7px;
        font-size: 12px;
        font-weight: bold;
        text-decoration: none;
        border: 1px solid #ddd;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    `}

    ${(props: AnchorProps) => !props.applyStyle && css`
        opacity: 0.4;
    `}

    &:hover {
        text-decoration: none;
    }
`;

const IconContainer = styled.div``;

const Icon = styled.img`
    width: 25px;
`;

const Anchor = (props: any) => {
    const { icon, iconAlt, url, showIcon, text, color, applyStyle } = props;

    return (
        <AnchorItem color={color} href={url} target="_blank" rel="noreferrer" applyStyle={applyStyle}>
            {showIcon && <IconContainer>
                <Icon src={icon} alt={iconAlt} />
            </IconContainer>}
            {text && text}
        </AnchorItem>
    );
};

export default Anchor;