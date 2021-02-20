import React from "react";
import styled from "styled-components";
import { CustomLink } from "../../../../../components";

const Wrapper = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: #FAFAFA;
    }
`;

const TitleContainer = styled.div``;

const Company = styled.div`
    color: #999;
    font-size: 12px;
`;

const JobType = styled.span`
    color: #1D9A00;
    font-size: 12px;
`;

const LocationContainer = styled.div`
    text-align: right;
`;

const Location = styled.div`
    font-size: 12px;
    color: #666;
`;

const Time = styled.div`
    font-size: 12px;
    color: #999;
`;

const JobItem = () => {
    return (
        <Wrapper>
            <TitleContainer>
                <CustomLink
                    bold={1}
                    color="#1d80be"
                    title="Java Software Developer (m/w/d)"
                    url="https://jobs.github.com/positions/ad2f2bf9-ac3a-45b9-9e81-6b63728bac48" />
                <Company>Taxfix - <JobType> Full time</JobType></Company>
            </TitleContainer>
            <LocationContainer>
                <Location>Berlin</Location>
                <Time>about 16 hours ago</Time>
            </LocationContainer>
        </Wrapper>
    );
};

export default JobItem;