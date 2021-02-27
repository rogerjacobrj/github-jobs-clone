import React from "react";
import styled from "styled-components";
import ContentLoader from 'react-content-loader';

const Wrapper = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

const CompanyCardLoader = () => {
    return (
        <Wrapper>
            <ContentLoader viewBox="0 0 100 70">
                <rect x="2" y="5" rx="0" ry="0" width="96" height="50" />
                <rect x="2" y="60" rx="0" ry="0" width="50" height="5" />
            </ContentLoader>
        </Wrapper>
    );
};

export default CompanyCardLoader;