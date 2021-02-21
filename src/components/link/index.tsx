import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface LinkProps {
    color?: string;
    underline?: number;
    bold?: number;
    fontSize?: string;
    hoverDecoration?: boolean;
}

const CustomizedLink = styled(Link)`
    font-size: ${(props: LinkProps) => props.fontSize ? props.fontSize : "13px"};
    font-weight: 500;

    ${(props: LinkProps) => props.bold === 1 && css`
        font-weight: bold;
        font-size: 14px;
    `}

    ${(props: LinkProps) => props.color && css`
        color: ${(props: LinkProps) => props.color};
    `}

    ${(props: LinkProps) => props.underline === 1 && css`
        text-decoration: underline;
    `} 
    
    ${(props: LinkProps) => !props.hoverDecoration && css`
        &:hover {
            text-decoration: none;
        }
    `}
`;

const CustomLink = (props: any) => {
    const { color, title, url, underline, bold, fontSize, hoverDecoration } = props;

    return <CustomizedLink
        color={color}
        bold={bold}
        to={url}
        fontSize={fontSize}
        hoverDecoration={hoverDecoration}
        underline={underline}>
        {title}
    </CustomizedLink>
};

export default CustomLink;