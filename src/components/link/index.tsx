import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface LinkProps {
    color: string;
    underline?: boolean;
}

const CustomizedLink = styled(Link)`
    font-size: 14px;
    font-weight: bold;

    ${(props: LinkProps) => props.color && css`
        color: ${(props: LinkProps) => props.color};
    `}

    ${(props: LinkProps) => props.underline && css`
        text-decoration: underline;
    `}
`;

const CustomLink = (props: any) => {
    const { color, title, url, underline } = props;

    return <CustomizedLink color={color} to={url} underline={underline}> {title}</CustomizedLink>
};

export default CustomLink;