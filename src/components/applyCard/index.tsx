import React from "react";
import styled from "styled-components";
import { Preview } from "..";

const Wrapper = styled.div`
    background-color: #edeee1;
    padding: 5px;
    margin-top: 0.8rem;
`;

const Container = styled.div`
    border: 1px solid #ddd;
    background: #fafafa;
    border-color: #e5e4d7;
    background-color: #fffeef;
`;

const Header = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 8px;
`;

const Title = styled.div`
    color: #333333;
    font-size: 12px;
    font-weight: bold;
`;

interface ApplyCardProps {
    data: string;
}

const ApplyCard = (props: ApplyCardProps) => {
    const { data } = props;

    return (
        <Wrapper>
            <Container>
                <Header>
                    <Title>How to apply</Title>
                </Header>
                <div className="applyPreview">
                    <Preview content={data} />
                </div>
            </Container>
        </Wrapper>
    );
};

export default ApplyCard;