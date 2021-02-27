import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
    Header, Footer, CustomLink, CompanyCard,
    Preview, ApplyCard
} from "../../components";
import { GradientWrapper, ContentContainer } from "../../styles";
import { Store } from "../../reducers";
import { fetchJobDetails } from "../../actions/details.action";
import { isLoaded, isLoading } from "../../helpers/store";
import { Company } from "../../types/jobs.types";
import DetailsLoader from "./loader";

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
    const dispatch = useDispatch();
    const detailState = useSelector((state: Store) => state.details);
    const [company, setCompanyDetails] = useState<Company>();
    const { data, status } = detailState;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(fetchJobDetails(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (data) {
            let company = {
                logo: data.company_logo,
                link: data.company_url,
                name: data.company
            };

            setCompanyDetails(company);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded(status)]);

    return (
        <Section>
            <MainSection>
                <Header />
                <Wrapper>
                    <Container>
                        <BackButtonContainer>
                            <CustomLink color="#1D80BE" title="← See all positions" url="/" bold={1} />
                        </BackButtonContainer>

                        {isLoading(status) ? <DetailsLoader />
                            : <GradientWrapper page="details">
                                <ContentContainer page="details">
                                    <ContentHeader>
                                        <Location>{data.type} / {data.location}</Location>
                                        <Title>{data.title}</Title>
                                    </ContentHeader>

                                    <MainContainer>
                                        <LeftSection className="detailSection">
                                            <Preview content={data.description} />
                                        </LeftSection>

                                        <AboutCompany>
                                            <CompanyCard type="details" company={company} isLoading={isLoading(status)} />
                                            <ApplyCard data={data.how_to_apply} />
                                        </AboutCompany>
                                    </MainContainer>
                                </ContentContainer>
                            </GradientWrapper>}
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