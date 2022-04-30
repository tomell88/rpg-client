import React from "react";

export default function Sprite({image, data, position}) {

    const {x, y, height, width} = data;

    return <div style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        height: `${height}px`,
        width: `${width}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`
    }}/>
}