import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from "styled-components";
import { Input, Button } from "../index";

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

interface SearchSectionProps {
    description: string;
    location: string;
    roleType: boolean;
    setDescription: (value: string) => void;
    setLocation: (value: string) => void;
    setRoleType: (value: boolean) => void;
    clickHandler: () => void;
}

const SearchSection = (props: SearchSectionProps) => {

    const { description, location, roleType, setDescription, setLocation, setRoleType, clickHandler } = props;

    return (
        <Section>
            <Container>
                <Row>
                    <Wrapper>
                        <InputContainer>
                            <Input
                                showLabel
                                label="Job description"
                                placeholder="Filter by title, benefits, companies, expertise"
                                updatedValue={setDescription}
                                value={description}
                                icon="./description.svg"
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                showLabel
                                label="Location"
                                placeholder="Filter by city, state, zip code or country"
                                updatedValue={setLocation}
                                value={location}
                                icon="./location.svg"
                            />
                        </InputContainer>
                        <CheckboxContainer>
                            <input type="checkbox" checked={roleType} onChange={(e) => setRoleType(e.target.checked)} /> Full time only
                    </CheckboxContainer>
                        <ButtonContainer>
                            <Button text="Search" buttonType="search" clickEvent={true} clickHandler={clickHandler} />
                        </ButtonContainer>
                    </Wrapper>
                </Row>
            </Container>
        </Section>
    );
};

export default SearchSection;