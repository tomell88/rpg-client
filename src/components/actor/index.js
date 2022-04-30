import React from "react";
import Sprite from "../sprite";

export default function Actor({spriteImage, data, animationStep = 0,
                                  direction = 0, position={x: 0, y:0}}) {

    const { height, width } = data
    return(
        <Sprite
            image={spriteImage}
            data={{
                x: animationStep * width,
                y: direction * height,
                height,
                width
            }}
            position={position}
        />
    );
}