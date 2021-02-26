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