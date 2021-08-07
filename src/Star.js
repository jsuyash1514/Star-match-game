import React, { useEffect, useState } from "react";
import './Star.css'

export const Star = (props) => {
    return(
        <div className="star-container">
            <div id="star" style={{color:props.bgColor, borderBottomColor: props.bgColor}}></div>
        </div>
    );
}