import React, { useEffect, useState } from "react";
import useWindowDimensions from "./windowDimHook";

const DocumentRenderer = (props) => {
  const googleDocsLink = props.url;
  const {height, width} = useWindowDimensions()
  console.log(width)
  const getIframeSrc = () => {
    const documentId = extractDocumentIdFromLink(googleDocsLink);
    const glink = `https://docs.google.com/document/d/${documentId}/pub?embedded=true`
    return glink
  };
  const extractDocumentIdFromLink = (link) => {
    const regex = /\/d\/([a-zA-Z0-9-_]+)/;
    const match = link.match(regex);
    if (match && match.length > 1) {
      return match[1];
    }
    return null;
  };
  return(
    <div className="iframe-main">
      <iframe src={getIframeSrc()} title="Google Docs Document" className="iframe" height={height-75}/>
    </div>
  ) 
};

export default DocumentRenderer;