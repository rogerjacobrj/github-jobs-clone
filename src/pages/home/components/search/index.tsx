import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from "styled-components";
import { Input, Button } from "../../../../components";

const Section = styled.div`
    padding-top: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const InputContainer = styled.div`
    width: 320px;
    margin-right: 20px;
`;

const CheckboxContainer = styled.div`
    margin-top: 1rem;
    margin-right: 20px;
    color: #444;
    font-weight: bold;
    font-size: 12px;
`;

const ButtonContainer = styled.div``;

const SearchSection = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Wrapper>
                        <InputContainer>
                            <Input
                                label="Job description"
                                placeholder="Filter by title, benefits, companies, expertise"
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                label="Location"
                                placeholder="Filter by city, state, zip code or country"
                            />
                        </InputContainer>
                        <CheckboxContainer>
                            <input type="checkbox" /> Full time only
                    </CheckboxContainer>
                        <ButtonContainer>
                            <Button text="Search" buttonType="search" />
                        </ButtonContainer>
                    </Wrapper>
                </Row>
            </Container>
        </Section>
    );
};

export default SearchSection;