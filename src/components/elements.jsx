import React from "react";

function Elements(props) {
    return (
        <>
            <img
                src={props.src}
                alt={props.alt}
                style={{
                    height: props.height || '25px',
                    position: 'absolute',
                    marginTop: props.marginTop,
                    marginLeft: props.marginLeft,
                    transform: props.transform,
                }} />
        </>
    );
}

export default Elements;
