import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import data from '../data';
import PageBaseContent from "../components/PageBaseContent";


function PageBasic(props){
    const [pageData, setPageData] = useState(data[props.type]);

    return (
        <div className="page-container">
            <Navbar/>
            <PageBaseContent pageData = {pageData}/>
        </div>
    )
}

export default PageBasic;