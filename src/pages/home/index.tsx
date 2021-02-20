import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../../components";
import Search from "./components/search";
import Featured from "./components/featured";

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
`;

const MainSection = styled.div``;

const FooterSection = styled.div`
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #999;
    background: #f5f5f5;
    border-top: 1px solid #ddd;
    padding: 1rem 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 920px;
`;

const HomePage = () => {
    return (
        <Section>
            <MainSection>
                <Header />
                <Wrapper>
                    <Container>
                        <Search />
                        <Featured />
                    </Container>
                </Wrapper>
            </MainSection>

            <FooterSection>
                <Container>
                    <Footer />
                </Container>
            </FooterSection>
        </Section>
    );
};

export default HomePage;