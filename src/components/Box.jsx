function Box(props){
    return (
        <div className="content-box" style={{width : "100%"}}>
            <p className = {"box-text" + (props.isHeading? " section-header" : "") }>
                {props.text}
            </p>
        </div>
    )
}

export default Box;