import styled, { css } from "styled-components";

interface GradientProps {
    readonly page?: string;
}

interface ContentContainerProps {
    readonly page?: string;
}

export const GradientWrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.06), #FAFAFA);
    ${(props: GradientProps) => props.page === "details" && css`
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.06),
            #FAFAFA 25%
        );
    `}
    padding: 4px;
    margin-top: 0.86rem;
`;

export const ContentContainer = styled.div`
    padding: 1rem;
    background: #FFFFFF;
    ${(props: ContentContainerProps) => props.page === "details" && css`
        background: linear-gradient(
            to bottom,
            #FFFFFF,
            #FAFAFA 25%
        );
    `}
`;

export const Loading = styled.div`
    text-align: center;
    padding: 2rem 0;
    font-size: 14px;
`;

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
`;

export const MainSection = styled.div``;

export const FooterSection = styled.div`
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #999;
    background: #f5f5f5;
    border-top: 1px solid #ddd;
    padding: 1rem 0;
`;

export const SubWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const WidthContainer = styled.div`
    width: 920px;
`;

export const SectionTitle = styled.h1`
    padding-bottom: 15px;
    font-size: 22px;
    color: #294455;
    border-bottom: 1px solid #ddd;
`;