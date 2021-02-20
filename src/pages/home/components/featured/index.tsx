import React from "react";
import styled from "styled-components";
import JobItem from "./jobItem";
import { CustomLink, Anchor } from "../../../../components";
import { languages, locations } from "./data";
import ListSection from "./listSection";

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.06), #fafafa);
    padding: 4px;
    margin-top: 0.86rem;
`;

const Container = styled.div`
    background: #FFFFFF;
    padding: 1rem
`;

const Title = styled.h1`
    padding-bottom: 15px;
    font-size: 22px;
    color: #294455;
    border-bottom: 1px solid #ddd;
`;

const SectionWrapper = styled.div`
    display: flex;
`;
const JobListSection = styled.div``;

const FollowSection = styled.div`
    // background-color: green;
    width: 35%;
`;

const LinkContainer = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 8px 0;

    &:hover {
        background-color: #FAFAFA;
    }
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding-right: 1rem;
`;

const HotSearchSection = styled.div`
    margin-top: 1rem;
`;

const HotSearchLanguages = styled.div`
    margin-bottom: 0.5rem;
`;

const HotSearchLocations = styled.div``;

const FollowButtonContainer = styled.div``;

const FeaturedCompanyContainer = styled.div`
    background: rgba(0, 0, 0, 0.06);
    padding: 5px;
    margin-top: 0.8rem;
    border-radius: 4px;
`;

const FeaturedCompanyWrapper = styled.div`
    background-color: #FFFFFF;
`;

const FeaturedCompanyTitle = styled.div`
    color: #333333;
    border-bottom: 1px solid #ddd;
    padding: 8px;
    font-size: 12px;
    font-weight: bold;
`;

const FeaturedCompanyLogoContainer = styled.div`
    padding: 8px;
    background-color: green;
`;

const FeaturedCompanyLogo = styled.img``;

const FeaturedJobCount = styled.div`
    padding: 8px;
    color: #1D80BE;
    font-size: 12px;
`;

const FeaturedSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Featured Jobs</Title>
                <SectionWrapper>
                    <LeftSection>
                        <JobListSection>
                            <JobItem />
                            <JobItem />
                            <LinkContainer>
                                <CustomLink color="#1D80BE" title="More Awesome Jobs →" url="/positions" bold={1} />
                            </LinkContainer>
                        </JobListSection>

                        <HotSearchSection>
                            <Title>Hot Searches</Title>
                            <HotSearchLanguages>
                                <ListSection
                                    type="language"
                                    color="#1D80BE"
                                    underline={1}
                                    url="/positions?description"
                                    data={languages} />
                            </HotSearchLanguages>
                            <HotSearchLocations>
                                <ListSection
                                    type="location"
                                    color="#1D80BE"
                                    underline={1}
                                    url="/positions?location"
                                    data={locations} />
                            </HotSearchLocations>
                        </HotSearchSection>
                    </LeftSection>

                    <FollowSection>
                        <FollowButtonContainer>
                            <Anchor
                                showIcon
                                applyStyle={true}
                                icon="./twitter.png"
                                color="#1D80BE"
                                iconAlt="Follow on Twitter"
                                url="https://twitter.com/GitHubJobs"
                                text="Follow GitHub Jobs on Twitter" />
                        </FollowButtonContainer>

                        <FeaturedCompanyContainer>
                            <FeaturedCompanyWrapper>
                                <FeaturedCompanyTitle>Featured Company</FeaturedCompanyTitle>
                                <FeaturedCompanyLogoContainer>
                                    <FeaturedCompanyLogo></FeaturedCompanyLogo>
                                </FeaturedCompanyLogoContainer>
                                <FeaturedJobCount>
                                    <CustomLink color="#1D80BE" title="3 Jobs at Taxfix" url="/" bold={0} />
                                </FeaturedJobCount>
                            </FeaturedCompanyWrapper>
                        </FeaturedCompanyContainer>
                    </FollowSection>
                </SectionWrapper>
            </Container>
        </Wrapper>
    );
};

export default FeaturedSection;