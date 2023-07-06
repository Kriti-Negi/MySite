import HomepageHeading from '../components/HomepageHeading';
import LinkBox from '../components/LinkBox';
import Navbar from '../components/Navbar'
import HomePageMe from '../images/homepage-me-icon.png'
import RightImage from '../components/RightImage';

function Home(){
    return (
        <div className="page-container">
            <Navbar/>
            <div className = "page-content">
                <div className = "page-left-content">
                    <HomepageHeading/>
                    <LinkBox url = "/organizations" text = "Organizations I'm Part of"/>
                    <div className='split-row'>
                        <LinkBox url = "/codingprojects" text = "Coding Projects"/>
                        <LinkBox url = "/poetryprojects" text = "Poetry Projects"/>
                    </div>
                    <LinkBox url = "/contactme" text = "Contact Me! I want to build with you."/>
                </div>
                <div className = "page-right-content">
                    <RightImage img = {HomePageMe}/>
                </div>
            </div>
        </div>
    )
}

export default Home;