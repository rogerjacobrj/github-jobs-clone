import React from "react";
import styled from "styled-components";
import {
    Header, Footer, CustomLink, CompanyCard,
    Preview, SubscribeCard, ApplyCard
} from "../../components";
import { GradientWrapper, ContentContainer } from "../../styles";

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

const BackButtonContainer = styled.div`
    padding-top: 20px;
`;

const ContentHeader = styled.div``;

const Location = styled.div`
    font-size: 12px;
    color: #888;
`;

const Title = styled.h1`
    padding-bottom: 15px;
    font-size: 22px;
    color: #294455;
    font-weight: bold;
    border-bottom: 1px solid #ddd;
`;

const MainContainer = styled.div`
    display: flex;
`;

const LeftSection = styled.div`
    width: 65%;
`;

const AboutCompany = styled.div`
    width: 35%;
`;




const DetailsPage = () => {

    return (
        <Section>
            <MainSection>
                <Header />
                <Wrapper>
                    <Container>
                        <BackButtonContainer>
                            <CustomLink color="#1D80BE" title="← See all positions" url="/" bold={1} />
                        </BackButtonContainer>

                        <GradientWrapper>
                            <ContentContainer>
                                <ContentHeader>
                                    <Location>Full Time / Berlin</Location>
                                    <Title>Senior Frontend Engineer*</Title>
                                </ContentHeader>

                                <MainContainer>
                                    <LeftSection>
                                        <Preview content="" />
                                    </LeftSection>

                                    <AboutCompany>
                                        <CompanyCard />
                                        <ApplyCard />
                                        <SubscribeCard />
                                    </AboutCompany>
                                </MainContainer>
                            </ContentContainer>
                        </GradientWrapper>
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

export default DetailsPage;