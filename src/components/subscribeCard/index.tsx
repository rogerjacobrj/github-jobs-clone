import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { Button, Modal } from "../index";
import { reducer, initialState } from "./store";
import { validateEmail } from "../../helpers/validation";

interface StyledProps {
    type: string;
};

const Container = styled.div`
    background: rgba(0, 0, 0, 0.06);
    padding: 5px;
    margin-top: 0.8rem;
    border-radius: 4px;
`;

const Wrapper = styled.div`
    background-color: #FAFAFA;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 8px;
`;

const Title = styled.div`
    color: #333333;
    font-size: 12px;
    font-weight: bold;
`;

const TextContainer = styled.div`
    padding: 8px;
`;

const Text = styled.p`
    font-size: 12px;
`;

const ButtonContainer = styled.div`
    padding: 0 8px;
    margin-bottom: 0.3rem;
`;

const ModalText = styled.div`
    font-size: 12px;
    margin-bottom: 1rem;
`;

const InputField = styled.input`
    width: 100%;
    padding: 5px;
    font-size: 12px;
    font-family: Helvetica, Arial, sans-serif;
    color: #666;
    border: 1px solid #bbb;
    border-bottom-color: #ddd;
    border-right-color: #ddd;
`;

const Message = styled.span`
    margin: 0.4rem 0;
    color: ${(props: StyledProps) => props.type === "error" ? "red" : "#1D80BE"};
    font-size: 13px;
`;

const SubscribeCard = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { showModal, value, error, message, isValid } = state;

    const onClickHandler = () => {
        setValue("showModal", !showModal);
        showModal && dispatch({ type: "RESET" });
    };

    const setValue = (field: string, value: string | boolean) => {
        dispatch({
            type: "SET_VALUE",
            field: field,
            value: value,
        });
    };

    useEffect(() => {
        if (value.length > 0) {
            if (validateEmail(value)) {
                setValue("isValid", true);
                setValue("error", false);
                setValue("message", "");
            } else {
                setValue("isValid", false);
                setValue("error", true);
                setValue("message", "Enter a valid email address");
            }
        }
    }, [value]);

    return (
        <Container>
            {showModal && <Modal title="Subscribe by Email" clickHandler={onClickHandler} isValid={isValid}>
                <ModalText> We promise not to spam or share your email.</ModalText>
                <InputField
                    type="text"
                    placeholder="Enter email address"
                    value={value}
                    onChange={(e) => setValue("value", e.target.value)} />
                {error && <Message type="error">{message}</Message>}
                {isValid && <Message type="success">Note: Email is not being sent to any servers</Message>}
            </Modal>}
            <Wrapper>
                <Header>
                    <Title>Subscribe to email updates</Title>
                </Header>
                <TextContainer>
                    <Text> Subscribe and we’ll send you a summary once a week if new jobs are posted to this list.</Text>
                </TextContainer>
                <ButtonContainer>
                    <Button
                        text="Subscribe to updates"
                        buttonType="clickEvent"
                        clickEvent={true}
                        clickHandler={onClickHandler} />
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
};

export default SubscribeCard;