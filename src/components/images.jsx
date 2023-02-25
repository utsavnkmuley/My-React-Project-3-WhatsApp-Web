import React from "react";

function Images(props) {
    return (
        <>
            <img
                src={props.src}
                alt={props.alt}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    position: props.position,
                    marginLeft: props.marginLeft,
                    marginTop: props.marginTop,
                }}
            />
        </>
    )
};

export default Images;
