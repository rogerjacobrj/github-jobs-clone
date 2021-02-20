import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface LinkProps {
    color: string;
    underline?: boolean;
    bold?: string;
}

const CustomizedLink = styled(Link)`
    font-size: 13px;
    // font-weight: ${(props: LinkProps) => props.bold ? "bold" : "500"};
    font-weight: 500;

    ${(props: LinkProps) => props.bold && css`
        font-weight: bold;
        font-size: 14px;
    `}

    ${(props: LinkProps) => props.color && css`
        color: ${(props: LinkProps) => props.color};
    `}

    ${(props: LinkProps) => props.underline && css`
        text-decoration: underline;
    `}
`;

const CustomLink = (props: any) => {
    const { color, title, url, underline, bold } = props;

    return <CustomizedLink color={color} bold={bold} to={url} underline={underline}> {title}</CustomizedLink>
};

export default CustomLink;