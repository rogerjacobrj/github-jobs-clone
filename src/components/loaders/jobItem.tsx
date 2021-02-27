import React from "react";
import styled from "styled-components";
import ContentLoader from 'react-content-loader';

const Wrapper = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

const JobItemLoader = () => {
    return (
        <Wrapper>
            <ContentLoader viewBox="0 0 380 70">
                <rect x="0" y="15" rx="0" ry="0" width="200" height="13" />
                <rect x="280" y="15" rx="0" ry="0" width="100" height="13" />
                <rect x="0" y="40" rx="0" ry="0" width="150" height="10" />
                <rect x="250" y="40" rx="0" ry="0" width="190" height="10" />
            </ContentLoader>
        </Wrapper>
    );
};

export default JobItemLoader;