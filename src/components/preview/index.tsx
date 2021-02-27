import React from "react";
import ReactQuill from 'react-quill';

const modules = {
    toolbar: false,
    clipboard: {
        matchVisual: true,
    }
};

interface PreviewProps {
    content: string;
}

const Preview = (props: PreviewProps) => {
    const { content } = props;

    return (
        <ReactQuill modules={modules} readOnly value={content} />
    );
};

export default Preview;