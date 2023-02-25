import React from "react";

function Text(props) {
    return (
        <>
            <h3 style={{
                textAlign: 'center',
                position: 'absolute',
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: props.fontSize || '17px',
                marginTop: props.marginTop,
                marginLeft: props.marginLeft,
                color: props.color,
            }}>
                {props.text}
            </h3>
        </>
    );
}

export default Text;
