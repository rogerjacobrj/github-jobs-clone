import React from "react";
import styled from "styled-components";
import {
    CustomLink, Anchor, CompanyCard, JobItem,
    ListSection, JobItemLoader, TextLoader
} from "../../../../components";
import { languages, locations } from "./data";
import { GradientWrapper, ContentContainer, SectionTitle } from "../../../../styles";
import { Company, FeaturedJobItem } from "../../../../types/jobs.types";
import { generateCount } from "../../../../helpers/index";

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

interface FeaturedSectionProps {
    jobs: FeaturedJobItem[];
    featured: Company;
    isLoading: boolean;
};

const FeaturedSection = (props: FeaturedSectionProps) => {
    const { jobs, featured, isLoading } = props;

    return (
        <GradientWrapper page="home">
            <ContentContainer page="home">
                <SectionTitle>
                    {isLoading ?
                        <TextLoader
                            x={0}
                            y={2}
                            rx={0}
                            ry={0}
                            viewBox="0 0 380 15"
                            width={90}
                            height={12}
                        /> : "Featured Jobs"}
                </SectionTitle>
                <SectionWrapper>
                    <LeftSection>
                        <JobListSection>
                            {isLoading ? generateCount(3).map((item, idx) => <JobItemLoader key={`item-${idx}`} />)
                                :
                                jobs && jobs.length > 0 && jobs.map((job, idx) => {
                                    return <JobItem data={job} key={`job-${idx}`} />
                                })
                            }
                            {jobs.length > 0 && <LinkContainer>
                                <CustomLink color="#1D80BE" title="More Awesome Jobs →" url="/positions" bold={1} />
                            </LinkContainer>}
                        </JobListSection>

                        <HotSearchSection>
                            <SectionTitle>Hot Searches</SectionTitle>
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
                        {isLoading ?
                            <TextLoader
                                x={0}
                                y={9}
                                rx={0}
                                ry={0}
                                viewBox="0 0 600 100"
                                width={600}
                                height={70}
                            /> :
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
                        }

                        <CompanyCard type="featured" company={featured} isLoading={isLoading} />
                    </FollowSection>
                </SectionWrapper>
            </ContentContainer>
        </GradientWrapper>
    );
};

export default FeaturedSection;