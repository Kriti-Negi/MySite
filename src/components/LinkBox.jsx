import { Link } from "react-router-dom";

function LinkBox(props){
    return (
        <Link to={props.url} style={{ textDecoration: 'none', "width": "100%"}}>
            <div className="content-box linked">
                <p className = "box-text">
                    {props.text}
                </p>
            </div>
        </Link>
    )
}

export default LinkBox;