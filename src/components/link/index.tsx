import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface LinkProps {
    color?: string;
    underline?: number;
    bold?: number;
    fontSize?: string;
    hoverdecoration?: boolean;
}

const CustomizedLink = styled(Link)`
    font-size: ${(props: LinkProps) => props.fontSize ? props.fontSize : "13px"};
    font-weight: 400;

    ${(props: LinkProps) => props.bold === 1 && css`
        font-weight: bold;
        font-size: 14px;
    `}

    ${(props: LinkProps) => props.color && css`
        color: ${(props: LinkProps) => props.color};

        &:hover {
            color: ${(props: LinkProps) => props.color};
        }
    `}

    ${(props: LinkProps) => props.underline === 1 && css`
        text-decoration: underline;
    `} 
    
    ${(props: LinkProps) => !props.hoverdecoration && css`
        &:hover {
            text-decoration: none;
        }
    `}
`;

const CustomLink = (props: any) => {
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