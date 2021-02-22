import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchJobs } from "../../actions/jobs.actions";
import { Header, Footer, SearchSection } from "../../components";
import Featured from "./components/featured";
import { isLoading } from "../../helpers/store";
import { SectionWrapper, MainSection, FooterSection, SubWrapper, WidthContainer } from "../../styles";

const HomePage = () => {
    const dispatch = useDispatch();
    const jobState = useSelector((state: Store) => state.jobs);

    let { data, company, status } = jobState;
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
        dispatch(fetchJobs(1, "home"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SectionWrapper>
            <MainSection>
                <Header />
                <SubWrapper>
                    <WidthContainer>
                        <SearchSection />
                        <Featured jobs={data} featured={company} isLoading={isLoading(status)} />
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

export default HomePage;