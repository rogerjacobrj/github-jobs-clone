import React from "react";
import styled from "styled-components";
import { Header } from "../../components";
import Search from "./components/search";
import Featured from "./components/featured";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 920px;
`;

const HomePage = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Container>
                    <Search />
                    <Featured />
                </Container>
            </Wrapper>
        </>
    );
};

export default HomePage;