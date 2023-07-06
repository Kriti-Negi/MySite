import { useEffect, useState } from "react";
import PageBaseContent from "../components/PageBaseContent";

import data from '../data';
import Navbar from "../components/Navbar";

function PageScrollable(props){

    const [pageData1, setPageData1] = useState(props.type == "poetry"? data.poetryProject1 : data.codeProject1);
    const [pageData2, setPageData2] = useState(props.type == "poetry"? data.poetryProject2 : data.codeProject2);
    const [pageData3, setPageData3] = useState(props.type == "poetry"? data.poetryProject3 : data.codeProject3);



    return (
        <div className="page-container">
            <Navbar/>
            <PageBaseContent pageData = {pageData1}/>
            <div className="spacer"/>
            <PageBaseContent pageData = {pageData2}/>
            <div className="spacer"/>
            <PageBaseContent pageData = {pageData3}/>
            <div className="spacer"/>
        </div>
    )
}

export default PageScrollable;