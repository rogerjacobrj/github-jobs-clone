import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchFeaturedJobs } from "../../actions/featuredJobs.actions";
import { Header, Footer } from "../../components";
import Search from "./components/search";
import Featured from "./components/featured";
import { isLoading } from "../../helpers/store";

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
    const dispatch = useDispatch();
    const featuredJobState = useSelector((state: Store) => state.featuredJobs);

    let { data, company, status } = featuredJobState;
    const itemCount = data.length;

    const getRandomIndex = () => {
        return Math.floor(Math.random() * 10);
    };

    let startPosition = getRandomIndex();
    let endPosition = getRandomIndex();

    if (startPosition > endPosition) {
        startPosition = endPosition - 2;
    }

    if (itemCount > 0) {
        if (startPosition < itemCount && endPosition < itemCount
            && startPosition < endPosition) {
            data = data.slice(startPosition, endPosition).slice(0, 2);
        } else {
            data = data.slice(0, 2);
        }
    }

    useEffect(() => {
        dispatch(fetchFeaturedJobs());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Section>
            <MainSection>
                <Header />
                <Wrapper>
                    <Container>
                        <Search />
                        <Featured jobs={data} featured={company} isLoading={isLoading(status)} />
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