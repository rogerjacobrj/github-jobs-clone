import React from "react";
import styled from "styled-components";
import { CustomLink } from "../index";
import { Company } from "../../types/jobs.types";
import { CompanyCardLoader } from "../../components";

const CompanyContainer = styled.div`
    background: rgba(0, 0, 0, 0.06);
    padding: 5px;
    margin-top: 0.8rem;
    border-radius: 4px;
`;

const CompanyWrapper = styled.div`
    background-color: #FFFFFF;
`;

const CompanyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 8px;
`;

const CompanyTitle = styled.div`
    color: #333333;
    font-size: 12px;
    font-weight: bold;
`;

const CompanyLogoContainer = styled.div`
    padding: 8px;
`;

const CompanyLogo = styled.img`
    border: 1px solid #f5f5f5;
    border-top: 1px solid #eee;
    -webkit-border-radius: 2px;
    max-width: 100%;
    padding: 10px;
`;

const FeaturedJobCount = styled.div`
    padding: 8px;
    color: #1D80BE;
    font-size: 12px;
`;

interface CompanyProps {
    type: string;
    company?: Company;
    isLoading?: boolean;
}

const CompanyCard = (props: CompanyProps) => {
    const { type, company, isLoading } = props;

    return (
        <CompanyContainer>
            <CompanyWrapper>
                <CompanyHeader>
                    <CompanyTitle>{type === "details" ? company && company!.name : "Featured Company"}</CompanyTitle>
                </CompanyHeader>
                {isLoading ? <CompanyCardLoader /> :
                    <>
                        {company && company.logo && <CompanyLogoContainer>
                            <CompanyLogo src={company?.logo}></CompanyLogo>
                        </CompanyLogoContainer>}
                        <FeaturedJobCount>
                            {type === "details" ?
                                <CustomLink
                                    color="#1D80BE"
                                    title={company && company!.link}
                                    url="/"
                                    bold={0}
                                    underline={1}
                                    hoverdecoration={1} />
                                : <CustomLink
                                    color="#1D80BE"
                                    title={`${company!.jobCount} ${company!.jobCount === 1 ? "Job" : "Jobs"} at ${company!.name!.slice(0, 26)} ${company!.name!.length > 26 ? "..." : ""}`}
                                    url="/"
                                    bold={0}
                                    underline={1}
                                    hoverdecoration={1} />}
                        </FeaturedJobCount>
                    </>}
            </CompanyWrapper>
        </CompanyContainer>
    );
};

export default CompanyCard;