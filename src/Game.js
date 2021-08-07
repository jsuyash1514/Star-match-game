import React from "react";
import { Button } from "./Button";
import './Game.css'
import { Star } from "./Star";

export const Game = (props) => {
    let bgColors = [];
    for(let i = 1; i<=9; i++) {
        if(i <= props.currentDigit) bgColors.push('#000');
        else bgColors.push('#DDD');
    }
    return (
        <div className="game">
            <div className="star container">
                <div className="mini-container">
                    <Star bgColor={bgColors[0]}/>
                    <Star bgColor={bgColors[1]}/>
                    <Star bgColor={bgColors[2]}/>
                </div>
                <div className="mini-container">
                    <Star bgColor={bgColors[3]}/>
                    <Star bgColor={bgColors[4]}/>
                    <Star bgColor={bgColors[5]}/>
                </div>
                <div className="mini-container">
                    <Star bgColor={bgColors[6]}/>
                    <Star bgColor={bgColors[7]}/>
                    <Star bgColor={bgColors[8]}/>
                </div>
            </div>
            <div className="button container">
                <div className="mini-container">
                    <Button digit={1}/>
                    <Button digit={2}/>
                    <Button digit={3}/>
                </div>
                <div className="mini-container">
                    <Button digit={4}/>
                    <Button digit={5}/>
                    <Button digit={6}/>
                </div>
                <div className="mini-container">
                    <Button digit={7}/>
                    <Button digit={8}/>
                    <Button digit={9}/>
                </div>
            </div>
        </div>
    );
}