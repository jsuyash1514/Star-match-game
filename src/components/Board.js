import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import './style/Board.css'
import { Star } from "./Star";

export const Board = (props) => {
    // Set start background color
    let starBgColor = [];
    for(let i=1; i<=9; i++){
        if(i <= props.requiredSum) starBgColor.push('#000');
        else starBgColor.push('#DDD');
    }

    // Define states
    const [sum, updateSum] = useState(0);
    const [candidates, setCandidates] = useState(new Set());
    const [buttonBgColors, setButtonBgcolors] = useState(['#E7E7E7','#E7E7E7','#E7E7E7',
    '#E7E7E7','#E7E7E7','#E7E7E7','#E7E7E7','#E7E7E7','#E7E7E7']);

    // Constructor
    useEffect(() => {
        updateSum(0);
        setCandidates(new Set());
    }, [props]);

    // Side effect of update sum
    useEffect(() => {
        updateButtonState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sum])

    // Side effect of "Match found"
    useEffect(() => {
        if (sum === props.requiredSum) {
            props.onMatch(candidates);
        }
    },[buttonBgColors])

    // Handle digit click
    const handleButtonClick = (digit) => {   
        if (props.unavailableDigits.has(digit)) return;

        if (candidates.has(digit)) {
            //Unselect Button
            candidates.delete(digit);
            updateSum(sum-digit);
        } else {
            //Select Button
            candidates.add(digit);
            updateSum(sum+digit);
        } 
    }
    const updateButtonState = () => {
        if (sum === props.requiredSum) {
            console.log('Match found!');
            let buttonBgColor = [];
            for(let i = 1; i<=9; i++) {
                if (props.unavailableDigits.has(i)) buttonBgColor.push('#4CAF50');
                else if (candidates.has(i)) buttonBgColor.push('#4CAF50');
                else buttonBgColor.push('#E7E7E7'); 
            }
            setButtonBgcolors(buttonBgColor);
        } else if (sum > props.requiredSum) {
            let buttonBgColor = [];
            for(let i = 1; i<=9; i++) {
                if (props.unavailableDigits.has(i)) buttonBgColor.push('#4CAF50');
                else if (candidates.has(i)) buttonBgColor.push('#E74C3C');
                else buttonBgColor.push('#E7E7E7'); 
            }
            setButtonBgcolors(buttonBgColor);
        } else {
            let buttonBgColor = [];
            for(let i = 1; i<=9; i++) {
                if (props.unavailableDigits.has(i)) buttonBgColor.push('#4CAF50');
                else if (candidates.has(i)) buttonBgColor.push('#3498DB');
                else buttonBgColor.push('#E7E7E7'); 
            }
            setButtonBgcolors(buttonBgColor);
        }
    }

    // return virtual DOM
    return (
        <div className="game">
            <div className="star container">
                <div className="mini-container">
                    <Star bgColor={starBgColor[0]}/>
                    <Star bgColor={starBgColor[1]}/>
                    <Star bgColor={starBgColor[2]}/>
                </div>
                <div className="mini-container">
                    <Star bgColor={starBgColor[3]}/>
                    <Star bgColor={starBgColor[4]}/>
                    <Star bgColor={starBgColor[5]}/>
                </div>
                <div className="mini-container">
                    <Star bgColor={starBgColor[6]}/>
                    <Star bgColor={starBgColor[7]}/>
                    <Star bgColor={starBgColor[8]}/>
                </div>
            </div>
            <div className="button container">
                <div className="mini-container">
                    <Button digit={1} buttonBgColor={buttonBgColors[0]} onButtonClick={handleButtonClick}/>
                    <Button digit={2} buttonBgColor={buttonBgColors[1]} onButtonClick={handleButtonClick}/>
                    <Button digit={3} buttonBgColor={buttonBgColors[2]} onButtonClick={handleButtonClick}/>
                </div>
                <div className="mini-container">
                    <Button digit={4} buttonBgColor={buttonBgColors[3]} onButtonClick={handleButtonClick}/>
                    <Button digit={5} buttonBgColor={buttonBgColors[4]} onButtonClick={handleButtonClick}/>
                    <Button digit={6} buttonBgColor={buttonBgColors[5]} onButtonClick={handleButtonClick}/>
                </div>
                <div className="mini-container">
                    <Button digit={7} buttonBgColor={buttonBgColors[6]} onButtonClick={handleButtonClick}/>
                    <Button digit={8} buttonBgColor={buttonBgColors[7]} onButtonClick={handleButtonClick}/>
                    <Button digit={9} buttonBgColor={buttonBgColors[8]} onButtonClick={handleButtonClick}/>
                </div>
            </div>
        </div>
    );
}