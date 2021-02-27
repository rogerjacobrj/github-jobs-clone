import React from "react";
import styled from "styled-components";
import ContentLoader from 'react-content-loader';

const Wrapper = styled.div``;

const DetailsLoader = () => {
    return (
        <Wrapper>
            <ContentLoader viewBox="0 0 100 70">
                <rect x="0" y="3" rx="0" ry="0" width="20" height="1.5" />
                <rect x="0" y="5" rx="0" ry="0" width="35" height="3" />
                <rect x="0" y="10" rx="0" ry="0" width="63" height="15" />
                <rect x="65" y="10" rx="0" ry="0" width="33" height="23" />
                <rect x="65" y="34" rx="0" ry="0" width="33" height="15" />
                <rect x="0" y="26" rx="0" ry="0" width="63" height="30" />
                <rect x="0" y="57" rx="0" ry="0" width="63" height="10" />
            </ContentLoader>
        </Wrapper>
    );
};

export default DetailsLoader;