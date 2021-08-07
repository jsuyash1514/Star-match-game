import React, { useEffect, useState } from "react";
import './Star.css'

export const Star = (props) => {
    const [bgColor, setBgColor] = useState('#DDD');
    useEffect(() => {
        setBgColor(props.bgColor);
    },[props.bgColor]);
    return(
        <div className="star-container">
            <div id="star" style={{color:bgColor, borderBottomColor: bgColor}}></div>
        </div>
    );
}