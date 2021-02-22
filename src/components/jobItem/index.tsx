import React from "react";
import styled from "styled-components";
import { CustomLink } from "../index";
import { FeaturedJobItem } from "../../types/jobs.types";

const Wrapper = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: #FAFAFA;
    }
`;

const TitleContainer = styled.div`
    width: 70%;
`;

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

interface JobItemProps {
    data: FeaturedJobItem;
}

const JobItem = (props: JobItemProps) => {
    const { data } = props;

    return (
        <Wrapper>
            <TitleContainer>
                <CustomLink
                    bold={1}
                    color="#1d80be"
                    title={data.title}
                    url={`/positions/${data.id}`} />
                <Company>{data.company} - <JobType> {data.type}</JobType></Company>
            </TitleContainer>
            <LocationContainer>
                <Location>{data.location}</Location>
                <Time>{data.created_at}</Time>
            </LocationContainer>
        </Wrapper>
    );
};

export default JobItem;