import React from "react";
import styled from "styled-components";
import { CustomLink } from "../../../../../components";

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

const ListSection = (props: any) => {
    const { type, color, underline, url, data } = props;
    const index = data && (data.length - 1);

    return (
        <ListWrapper>
            {data.map((item: { name: string }, idx: number) => {
                return <ListWrapperItem>
                    <CustomLink
                        key={`${type}-${idx}`}
                        color={color}
                        title={item.name}
                        underline={underline}
                        url={`${url}=${item.name}`} />
                    {idx !== index && <ListItemSeperator>.</ListItemSeperator>}
                </ListWrapperItem>

            })}
        </ListWrapper>
    );
};

export default ListSection;