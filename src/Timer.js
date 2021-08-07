import { useEffect, useState } from "react";
import './Timer.css'

export const Timer = (props) => {
    const [timeRem, setTimeRem] = useState(props.timeLimit);
    useEffect(() => {
        if(timeRem === 0) {
            props.onTimeout();
        } else {
        setTimeout(() => {
            setTimeRem(timeRem-1);
        }, 1000)}
    },[timeRem]);
    return (
        <i><span id="timerText">{timeRem} seconds remaining</span></i>
    )
}