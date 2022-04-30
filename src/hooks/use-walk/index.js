import {useState} from "react";

export default function useWalk(maxSteps = 3) {

    //by default, we are facing 'down'
    const [position, setPosition ] = useState({x: 0, y: 0});
    const [direction, setDirection] = useState(0);
    const [step, setStep] = useState(0)

    const stepSize = 32;

    const modifier = {
        down: { x: 0, y: stepSize},
        left: { x: -stepSize, y: 0},
        right: { x: stepSize, y: 0},
        up: { x: 0, y: -stepSize},
    };

    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    };

    function walk(direction) {
        if(directions.hasOwnProperty(direction)) {
            setDirection(prev => {
                if(directions[direction] === prev) {
                    move(direction);
                }
                return directions[direction];
            });
            setStep(prev => prev < (maxSteps-1) ? prev+1 : 0)
        }
    }

    function move(direction) {
        setPosition(prev => ({
            x: prev.x + modifier[direction].x,
            y: prev.y + modifier[direction].y
        }));
    }

    return {walk, direction, step, position};
}