import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Store } from "../../reducers";
import { fetchJobs, fetchJobsByFilter } from "../../actions/jobs.actions";
import {
    Header, Footer, SearchSection, Anchor, TextLoader,
    SubscribeCard, JobItem, Button, JobItemLoader
} from "../../components";
import { isLoading } from "../../helpers/store";
import { GradientWrapper, ContentContainer } from "../../styles";
import { SectionWrapper, MainSection, FooterSection, SubWrapper, WidthContainer, SectionTitle } from "../../styles";
import { urlGenerator, generateCount } from "../../helpers";

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
    const locationHook = useLocation();
    const history = useHistory();
    const jobState = useSelector((state: Store) => state.jobs);
    const [description, setDescriptionQuery] = useState<string>("");
    const [location, setLocationQuery] = useState<string>("");
    const [roleType, setRoleType] = useState<boolean>(false);
    let [page, setPage] = useState(1);

    let { data, status, isEnd, loadMore } = jobState;

    const getQueryParams = () => {
        const query = new URLSearchParams(locationHook.search);
        let description = query.get("description");
        let location = query.get("location");
        let full_time = query.get("full_time");

        return {
            description,
            location,
            full_time
        };
    };

    const searchJobsByFilter = () => {
        const query = getQueryParams();

        if ((query.description || query.location || query.full_time)) {
            let filters = {
                description: query.description!,
                location: query.location!,
                roleType: query.full_time ? true : false
            };

            dispatch(fetchJobsByFilter("list", page, filters!));
        } else {
            dispatch(fetchJobs(page, "list"));
        }
    };

    useEffect(() => {
        const query = getQueryParams();

        if (query && query.description && query.description.length > 0) {
            setDescriptionQuery(query.description);
        }

        if (query && query.location && query.location.length > 0) {
            setLocationQuery(query.location);
        }

        if (query && query.full_time) {
            setRoleType(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history.location]);

    // Load more jobs
    const loadMoreJobs = () => {
        setPage(++page);
    };

    useEffect(() => {
        searchJobsByFilter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (page > 1) {
            searchJobsByFilter();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    // Search jobs
    const searchJobs = () => {
        let filterURL = urlGenerator(description, location, roleType);
        setPage(1);
        filterURL && history.push(filterURL);

        let filters = {
            description: description,
            location: location,
            roleType: roleType ? true : false
        };

        dispatch(fetchJobsByFilter("list", 1, filters!));
    };

    return (
        <SectionWrapper>
            <MainSection>
                <Header />
                <SubWrapper>
                    <WidthContainer>
                        <SearchSection
                            description={description}
                            setDescription={(value: string) => setDescriptionQuery(value)}
                            location={location}
                            setLocation={(value: string) => setLocationQuery(value)}
                            roleType={roleType}
                            setRoleType={(value: boolean) => setRoleType(value)}
                            clickHandler={searchJobs} />
                        <GradientWrapper page="list">
                            <ContentContainer page="list">
                                <SectionTitle>
                                    {isLoading(status) ?
                                        <TextLoader
                                            x={0}
                                            y={0}
                                            rx={0}
                                            ry={0}
                                            viewBox="0 0 380 15"
                                            width={90}
                                            height={12}
                                        /> : `Showing ${data.length} Jobs`}
                                </SectionTitle>
                                <LeftSectionWrapper>
                                    <LeftSection>
                                        <JobListSection>
                                            {isLoading(status) ?
                                                generateCount(10).map((item, idx) => <JobItemLoader key={`item-${idx}`} />) :
                                                data && data.length > 0 && data.map((job, idx) => {
                                                    return <JobItem data={job} key={`job-${idx}`} />
                                                })}

                                        </JobListSection>
                                        {!isEnd && <ButtonContainer>
                                            {data.length > 0 && <Button
                                                text={`${isLoading(loadMore.status) ? "Loading..." : "More Awesome Jobs"}`}
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