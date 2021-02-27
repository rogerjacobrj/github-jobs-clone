import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Store } from "../../reducers";
import { fetchJobs } from "../../actions/jobs.actions";
import { Header, Footer, SearchSection } from "../../components";
import Featured from "./components/featured";
import { isLoading } from "../../helpers/store";
import { SectionWrapper, MainSection, FooterSection, SubWrapper, WidthContainer } from "../../styles";
import { urlGenerator } from "../../helpers";

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const jobState = useSelector((state: Store) => state.jobs);
    const [description, setDescriptionQuery] = useState<string>("");
    const [location, setLocationQuery] = useState<string>("");
    const [roleType, setRoleType] = useState<boolean>(false);

    let { data, company, status } = jobState;


    useEffect(() => {
        dispatch(fetchJobs(1, "home"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const searchJobs = () => {
        let filterURL = urlGenerator(description, location, roleType);
        filterURL && history.push(filterURL);
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
                            clickHandler={searchJobs}
                        />
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