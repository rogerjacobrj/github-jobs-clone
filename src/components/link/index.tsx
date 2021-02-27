import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface LinkStyleProps {
    color?: string;
    underline?: number;
    bold?: number;
    fontSize?: string;
    hoverdecoration?: number;
}

const CustomizedLink = styled(Link)`
    font-size: ${(props: LinkStyleProps) => props.fontSize ? props.fontSize : "13px"};
    font-weight: 400;

    ${(props: LinkStyleProps) => props.bold === 1 && css`
        font-weight: bold;
        font-size: 14px;
    `}

    ${(props: LinkStyleProps) => props.color && css`
        color: ${(props: LinkStyleProps) => props.color};

        &:hover {
            color: ${(props: LinkStyleProps) => props.color};
        }
    `}

    ${(props: LinkStyleProps) => props.underline === 1 && css`
        text-decoration: underline;
    `} 
    
    ${(props: LinkStyleProps) => props.hoverdecoration === 0 && css`
        &:hover {
            text-decoration: none;
        }
    `}
`;

interface LinkProps {
    color?: string;
    title?: string;
    url: string;
    underline?: number;
    bold?: number;
    fontSize?: string;
    hoverdecoration?: number;
    children?: any;
}

const CustomLink = (props: LinkProps) => {
    const { color, title, url, underline, bold, fontSize, hoverdecoration, children } = props;

    return <CustomizedLink
        color={color}
        bold={bold}
        to={url}
        fontSize={fontSize}
        hoverdecoration={hoverdecoration}
        underline={underline}>
        {children ? children : title}
    </CustomizedLink>
};

export default CustomLink;