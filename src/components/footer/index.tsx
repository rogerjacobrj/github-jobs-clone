import React from "react";
import styled from "styled-components";
import { CustomLink, Anchor } from "../../components";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkContainer = styled.div`
    display: flex;
`;

const Link = styled.div`
    margin-right: 0.6rem;
`;

const RightsContainer = styled.div``;

const links = [
    {
        title: "The Github Blog"
    },
    {
        title: "Contact"
    },
    {
        title: "Privacy"
    },
    {
        title: "Terms"
    },
    {
        title: "API"
    }
];

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Wrapper>
            <LinkContainer>
                {links.map((link, idx) => {
                    return <Link key={`link-${idx}`}>
                        <CustomLink color="#1D80BE" title={link.title} url="/" bold={0} />
                    </Link>
                })}
            </LinkContainer>
            <Anchor
                url="https://github.com"
                icon="./github.png"
                showIcon
                applyStyle={false} />
            <RightsContainer>
                © {year} GitHub Inc. All rights reserved.
            </RightsContainer>
        </Wrapper>
    );
};

export default Footer;