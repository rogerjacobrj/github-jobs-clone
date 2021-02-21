import React from "react";
import styled from "styled-components";
import { CustomLink } from "../index";

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

const CompanyJobCount = styled.div`
    padding: 2px 5px;
    font-size: 11px;
    font-weight: bold;
    text-decoration: none;
    background: #eee;
    border: 1px solid #eee;
    border-top: 1px solid #e5e5e5;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;

    &:hover {
        background-color: #FFFFFF;
    }
`;


const CompanyLogoContainer = styled.div`
    padding: 8px;
    background-color: green;
`;

const CompanyLogo = styled.img`
    border: 1px solid #f5f5f5;
    border-top: 1px solid #eee;
    -webkit-border-radius: 2px;
`;

const FeaturedJobCount = styled.div`
    padding: 8px;
    color: #1D80BE;
    font-size: 12px;
`;

const CompanyCard = () => {
    return (
        <CompanyContainer>
            <CompanyWrapper>
                <CompanyHeader>
                    <CompanyTitle>Featured Company</CompanyTitle>
                    <CompanyJobCount>
                        <CustomLink color="#1D80BE" title="2 other jobs" url="/" bold={0} fontSize="11" hoverdecoration={0} />
                    </CompanyJobCount>
                </CompanyHeader>
                <CompanyLogoContainer>
                    <CompanyLogo></CompanyLogo>
                </CompanyLogoContainer>
                <FeaturedJobCount>
                    <CustomLink color="#1D80BE" title="3 Jobs at Taxfix" url="/" bold={0} underline={1} hoverdecoration={1} />
                </FeaturedJobCount>
            </CompanyWrapper>
        </CompanyContainer>
    );
};

export default CompanyCard;