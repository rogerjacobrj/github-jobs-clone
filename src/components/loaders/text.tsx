import React from "react";
import ContentLoader from 'react-content-loader';

interface TextLoaderProps {
    viewBox: string;
    x: number;
    y: number;
    rx: number;
    ry: number;
    width: number;
    height: number;
}

const TextLoader = (props: TextLoaderProps) => {
    const { viewBox, x, y, rx, ry, width, height } = props;

    return (
        <ContentLoader viewBox={viewBox}>
            <rect x={x} y={y} rx={rx} ry={ry} width={width} height={height} />
        </ContentLoader>
    );
};

export default TextLoader;