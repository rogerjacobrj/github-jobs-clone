import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchJobs } from "../../actions/jobs.actions";
import { Header, Footer, SearchSection, Anchor, SubscribeCard, JobItem, Button } from "../../components";
import { isLoading } from "../../helpers/store";
import { GradientWrapper, ContentContainer, Loading } from "../../styles";
import { SectionWrapper, MainSection, FooterSection, SubWrapper, WidthContainer, SectionTitle } from "../../styles";

const LeftSectionWrapper = styled.div`
    display:flex;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding-right: 1rem;
`;

const FollowButtonContainer = styled.div``;

const JobListSection = styled.div``;

const FollowSection = styled.div`
    width: 35%;
`;

const ButtonContainer = styled.div`
    margin-top: 0.6rem;
`;

const ListingPage = () => {
    const dispatch = useDispatch();
    const jobState = useSelector((state: Store) => state.jobs);
    let [page, setPage] = useState(1);

    let { data, status, isEnd } = jobState;

    useEffect(() => {
        dispatch(fetchJobs(page, "list"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadMoreJobs = () => {
        setPage(++page);
    };

    useEffect(() => {
        if (page > 1) {
            dispatch(fetchJobs(page, "list"));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <SectionWrapper>
            <MainSection>
                <Header />
                <SubWrapper>
                    <WidthContainer>
                        <SearchSection />
                        <GradientWrapper>
                            <ContentContainer>
                                <SectionTitle>Showing {data.length} Jobs</SectionTitle>
                                <LeftSectionWrapper>
                                    <LeftSection>
                                        <JobListSection>
                                            {data && data.length > 0 ? data.map((job, idx) => {
                                                return <JobItem data={job} key={`job-${idx}`} />
                                            }) : <Loading>Loading...</Loading>}

                                        </JobListSection>
                                        {!isEnd && <ButtonContainer>
                                            {data.length > 0 && <Button
                                                text={`${isLoading(status) ? "Loading..." : "More Awesome Jobs"}`}
                                                buttonType="clickEvent"
                                                clickEvent={true}
                                                clickHandler={loadMoreJobs} />}
                                        </ButtonContainer>}
                                    </LeftSection>

                                    <FollowSection>
                                        <FollowButtonContainer>
                                            <Anchor
                                                showIcon
                                                applyStyle={true}
                                                icon="./rss.png"
                                                color="#1D80BE"
                                                iconAlt="Subscribe to Atom Feed"
                                                url=""
                                                text="Subscribe to Atom Feed" />
                                            <Anchor
                                                showIcon
                                                applyStyle={true}
                                                icon="./twitter.png"
                                                color="#1D80BE"
                                                iconAlt="Follow on Twitter"
                                                url="https://twitter.com/GitHubJobs"
                                                text="Follow GitHub Jobs on Twitter" />
                                        </FollowButtonContainer>

                                        <SubscribeCard />

                                    </FollowSection>
                                </LeftSectionWrapper>
                            </ContentContainer>
                        </GradientWrapper>
                    </WidthContainer>
                </SubWrapper>
            </MainSection>

            <FooterSection>
                <WidthContainer>
                    <Footer />
                </WidthContainer>
            </FooterSection>
        </SectionWrapper>
    );
};

export default ListingPage;