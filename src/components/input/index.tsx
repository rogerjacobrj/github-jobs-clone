import React from "react";
import styled from "styled-components";
import SVG from 'react-inlinesvg';

const Wrapper = styled.div``;

const Label = styled.div`
    font-size: 12px;
    font-weight: bold;
`;

const InputContainer = styled.div`
    background: rgba(0, 0, 0, 0.06);
    padding: 2px;
    position: relative;
`;

const InputField = styled.input`
    border: 1px solid #ccc;
    padding: 7px 5px;
    width: 100%;
    font-size: 12px;
    padding-left: 30px;
`;

const Input = (props: any) => {
    const { label, placeholder, showLabel, updatedValue, value, icon } = props;

    const onChangeHandler = (value: string | number) => {
        updatedValue(value);
    };

    return (<Wrapper>
        {showLabel && <Label>{label}</Label>}
        <InputContainer>
            <SVG src={icon} className="svgIcon" />
            <InputField
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(e.target.value)} />
        </InputContainer>
    </Wrapper>);
};

export default Input;