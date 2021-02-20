const CallToAction = (props) => {
    return(
        <div className="CallToAction"> 
          <button
            className={props.buttonColor}
            id={props.label}
            name={props.type}
            onClick={props.clickEvent}>
              {props.label}
          </button>
        </div>
    );
}

export default CallToAction;