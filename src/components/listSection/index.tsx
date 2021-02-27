import React from "react";
import styled from "styled-components";
import { CustomLink } from "../index";

const ListWrapper = styled.div`
    display: flex;
`;

const ListWrapperItem = styled.div`
    position: relative;
`;

const ListItemSeperator = styled.span`
    position: relative;
    bottom: 3px;
    margin: 0 6px;
`;

interface ListProps {
    type: string;
    color: string;
    underline: number;
    url: string;
    data: { name: string }[];
}

const ListSection = (props: ListProps) => {
    const { type, color, underline, url, data } = props;
    const index = data && (data.length - 1);

    return (
        <ListWrapper>
            {data.map((item: { name: string }, idx: number) => {
                return <ListWrapperItem key={`${type}-${idx}`}>
                    <CustomLink
                        color={color}
                        title={item.name}
                        bold={1}
                        hoverdecoration={1}
                        underline={underline}
                        url={`${url}=${item.name}`} />
                    {idx !== index && <ListItemSeperator>.</ListItemSeperator>}
                </ListWrapperItem>

            })}
        </ListWrapper>
    );
};

export default ListSection;