import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Label = styled.div`
    font-size: 12px;
    font-weight: bold;
`;

const InputContainer = styled.div`
    background: rgba(0, 0, 0, 0.06);
    padding: 2px;
`;

const InputField = styled.input`
    border: 1px solid #ccc;
    padding: 7px 5px;
    width: 100%;
    font-size: 12px;
`;

const Input = (props: any) => {
    const [value, setValue] = useState<string | number>();

    const { label, placeholder } = props;

    const onChangeHandler = (value: string | number) => {
        setValue(value);
    }
    return (<Wrapper>
        <Label>{label}</Label>
        <InputContainer>
            <InputField
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(e.target.value)} />
        </InputContainer>
    </Wrapper>);
};

export default Input;