function Chatbox(props) {
    return (
        <div className={props.className}>
            {/*Inner Box Element*/}
            <div
                style={{
                    backgroundColor: props.background || "#efeeee",
                    border: props.border || "1px solid #E5E4E2",
                    borderRadius: props.borderRadius,
                    padding: "1em",
                    height: props.chatboxHeight || "50px",
                    width: props.width || "400px",
                    display: "flex", // Add flex display to the container
                    alignItems: "center", // Align items vertically in the center
                    position: props.position,
                    marginTop: props.marginTop,
                    marginLeft: props.marginLeft,
                }}
            >
                {/*Image Element*/}
                <img
                    src={props.src}
                    alt={props.alt}
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <div style={{ marginLeft: "1em" }}>
                    {/*Time Element*/}
                    <p
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            fontSize: "15px",
                            color: "#C0C0C0",
                            margin: 0, // Remove default margin
                            marginTop: "0.75em", // Add top margin
                            marginBottom: "0.25em", // Add bottom margin
                            marginLeft: '20em',
                        }}
                    >
                        {props.time}
                    </p>

                    {/*User Element*/}
                    <p
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            fontSize: props.fontSize || "22px",
                            margin: 0, // Remove default margin
                            marginTop: props.marginTopU || "-1.5em", // Add top margin
                            marginBottom: "0.25em" // Add bottom margin
                        }}
                    >
                        {props.user}
                    </p>

                    {/*Subtitle Element*/}
                    <h4
                        style={{
                            fontFamily: "Roboto",
                            fontWeight: "100",
                            color: "#C0C0C0",
                            margin: 0, // Remove default margin
                            marginTop: props.marginTop || "0.10 em" // Add top margin
                        }}>
                        {props.subtitle}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;
