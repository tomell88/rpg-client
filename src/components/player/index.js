import React, { useState, useEffect } from "react";
import Actor from "../actor";
import useWalk from "../../hooks/use-walk";
import useKeyPress from "../../hooks/use-key-press";

export default function Player({skin}) {

    const positionData = {
        height: 32,
        width: 32
    };

    const { walk, direction, step, position } = useWalk(3);

    useKeyPress((keyEvent) => {
        walk(keyEvent.key.replace("Arrow", "").toLowerCase());
        keyEvent.preventDefault();
    })

    useEffect(() => {
        const id = setInterval(() => updatePlayerLocationOnServer(), 1000);

        return () => {
            clearInterval(id);
        };
    }, [position]);

    function updatePlayerLocationOnServer() {

        console.log(position);

        fetch('http://localhost:8080/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(position),
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return(
        <Actor spriteImage={`${skin}.png`} data={positionData} animationStep={step} direction={direction} position={position}/>
    );
}