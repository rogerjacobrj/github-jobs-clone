import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../index";

const Backdrop = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #454749;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 0.25rem;
  width: 30%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.063rem solid #ebebeb;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem 1rem 1rem;
  width: 30%;
`;

const ClickButton = styled.div`
    &:hover {
        cursor: pointer;
    }
`;


const Modal = (props: any) => {

    const { cancel, clickHandler } = props;
    // Disable the body scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            <Backdrop />
            <Wrapper>
                <Header>
                    <Title>{props.title}</Title>
                    <ClickButton onClick={() => cancel()}>X</ClickButton>
                </Header>
                {props.children && (
                    <Content>{props.children}</Content>
                )}
                <Footer>
                    <Button text="Subscribe" buttonType="clickEvent" clickEvent clickHandler={clickHandler} />
                </Footer>
            </Wrapper>
        </>
    );
};

export default Modal;