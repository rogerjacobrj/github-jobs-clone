import React from "react";
import styled from "styled-components";
import JobItem from "./jobItem";
import { CustomLink } from "../../../../components";

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
const JobListSection = styled.div`
    width: 65%;
    padding-right: 1rem;
`;

const ListSection = styled.div`
    background-color: green;
    width: 35%;
`;

const LinkContainer = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 8px 0;

    &:hover {
        background-color: #FAFAFA;
    }
`;

const FeaturedSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Featured Jobs</Title>
                <SectionWrapper>
                    <JobListSection>
                        <JobItem />
                        <JobItem />
                        <LinkContainer>
                            <CustomLink color="#1D80BE" title="More Awesome Jobs →" url="/positions" />
                        </LinkContainer>
                    </JobListSection>
                    <ListSection>
                        
                    </ListSection>
                </SectionWrapper>
            </Container>
        </Wrapper>
    );
};

export default FeaturedSection;