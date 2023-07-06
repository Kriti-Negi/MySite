
import Box from "../components/Box";
import LinkBox from "../components/LinkBox";

/* get images */
import SocialLifeIcon from '../images/social-life-icon.png';
import WorkWithYouIcon from '../images/work-with-you-icon.png';
import RightImage from "../components/RightImage";

import code1 from '../images/code1.png'
import code2 from '../images/code2.png'
import code3 from '../images/code3.png'

import poem1 from '../images/poem1.png'
import poem2 from '../images/poem2.png'
import poem3 from '../images/poem3.png'

function PageBaseContent(props){
    return (
        <div className = "page-content">
            <div className = "page-left-content">
                <div className="page-left-container">
                    {props.pageData && <Box text = {props.pageData.title} isHeading = {true}/>}
                    {props.pageData && props.pageData.items.map((elem, index) => {return elem.link? <LinkBox key = {index} text = {elem.text} url = {elem.url}/>: <Box key = {index} text = {elem.text} />})}
                </div>
                
            </div>
            <div className = "page-right-content">
                {window.location.href.includes("organizations") && <RightImage img = {SocialLifeIcon}/>}
                {window.location.href.includes("contactme") && <RightImage img = {WorkWithYouIcon}/>}

                {props.pageData && props.pageData.title === "Coding Projects" && props.pageData.items[0].text == "Current" && <RightImage img = {code1}/>}
                {props.pageData && props.pageData.title === "Coding Projects" && props.pageData.items[0].text == "Future" && <RightImage img = {code2}/>}
                {props.pageData.title && props.pageData.title === "Coding Projects" && props.pageData.items[0].text == "Past" && <RightImage img = {code3}/>}

                {props.pageData && props.pageData.title === "Poetry Projects" && props.pageData.items[0].text == "Current" && <RightImage img = {poem1}/>}
                {props.pageData && props.pageData.title === "Poetry Projects" && props.pageData.items[0].text == "Future" && <RightImage img = {poem2}/>}
                {props.pageData && props.pageData.title === "Poetry Projects" && props.pageData.items[0].text == "Past" && <RightImage img = {poem3}/>}
            </div>
        </div>
    )
}

export default PageBaseContent;