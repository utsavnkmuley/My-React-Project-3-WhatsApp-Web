import React from "react";

function Box(props) {
    return (
        <>
            <div
                style={{
                    backgroundColor: props.backgroundColor || "#efeeee",
                    border: "1px solid #E5E4E2",
                    padding: "1em",
                    height: props.height,
                    width: props.width || "61.7vw", // Set the width to 90% of the viewport width
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    marginLeft: props.marginLeft,
                    marginTop: props.marginTop,
                    borderRadius: props.borderRadius,
                }}
            >
                {props.box}
            </div>
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

export default Box;
