import React from "react";

const DocumentRenderer = (props) => {
  const googleDocsLink = props.url;
  
  const getIframeSrc = () => {
    const documentId = extractDocumentIdFromLink(googleDocsLink);
    return `https://docs.google.com/document/d/${documentId}/pub?embedded=true`;
  };

  const extractDocumentIdFromLink = (link) => {
    const regex = /\/d\/([a-zA-Z0-9-_]+)/;
    const match = link.match(regex);
    if (match && match.length > 1) {
      return match[1];
    }
    return null;
  };

  return <iframe src={getIframeSrc()} title="Google Docs Document" width="100%" height={650} />;
};

export default DocumentRenderer;