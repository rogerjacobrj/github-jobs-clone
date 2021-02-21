import React from "react";
import styled from "styled-components";
import JobItem from "./jobItem";
import { CustomLink, Anchor, CompanyCard } from "../../../../components";
import { languages, locations } from "./data";
import ListSection from "./listSection";
import { GradientWrapper, ContentContainer } from "../../../../styles";

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

const FeaturedSection = () => {
    return (
        <GradientWrapper>
            <ContentContainer>
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

                        <CompanyCard />
                    </FollowSection>
                </SectionWrapper>
            </ContentContainer>
        </GradientWrapper>
    );
};

export default FeaturedSection;