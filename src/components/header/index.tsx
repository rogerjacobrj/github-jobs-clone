import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";
import { CustomLink } from "../index";

const CustomContainer = styled(Container)`
    padding-left: 0;
    padding-right: 0;
`;

const Wrapper = styled.div`
    padding: 0.6rem 1.5rem;
    color: #C9E2F1;
    background: #2B7FC3;
    border-top: 4px solid #1D5C8F;
    border-bottom: 2px solid #D7D5D4;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 576px) { 
        padding: 0.3rem 1.5rem;
    }
`;

const Section = styled.div`
    width: 920px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 576px) { 
        flex-direction: row;
    }
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.h2`
    font-size: 1.5rem;
    color: #FFFFFF;
    margin: 0;
`;

const Type = styled.div`
    font-size: 1.5rem;
    color: #FFFFFF;
    font-weight: 400;
`;

const Jobs = styled.div``;

// const CustomLink = styled(Link)`
//     color: #FFFFFF;
//     font-size: 0.85rem;
//     font-weight: bold;

//     &:hover {
//         color: #FFFFFF;
//     }
// `;

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const NavListItem = styled.li`
    margin: 0 0.3rem;

    &:nth-child(2) {
        padding: 0 0.5rem;
        border-left: 1px solid #757575;
        border-right: 1px solid #757575;
    }
`;

const Header = () => {
    return (
        <CustomContainer fluid>
            <Row>
                <Col>
                    <Wrapper>
                        <Section>
                            <CustomLink
                                color="#FFFFFF"
                                bold={0}
                                hoverdecoration={0}
                                url="/">
                                <Brand>
                                    <Logo>GitHub</Logo>
                                    <Type>&nbsp;Jobs</Type>
                                </Brand>
                            </CustomLink>
                            <Jobs>
                                <NavList>
                                    <NavListItem>
                                        <CustomLink
                                            color="#FFFFFF"
                                            bold={0}
                                            hoverdecoration={0}
                                            title="All jobs"
                                            url="/positions" />
                                    </NavListItem>
                                    <NavListItem>
                                        <CustomLink
                                            color="#FFFFFF"
                                            bold={0}
                                            hoverdecoration={0}
                                            title="Post a job"
                                            url="/" />
                                    </NavListItem>
                                    <NavListItem>
                                        <CustomLink
                                            color="#FFFFFF"
                                            bold={0}
                                            hoverdecoration={0}
                                            title="How it works"
                                            url="/" />
                                    </NavListItem>
                                </NavList>
                            </Jobs>
                        </Section>
                    </Wrapper>
                </Col>
            </Row>
        </CustomContainer>
    );
};

export default Header;