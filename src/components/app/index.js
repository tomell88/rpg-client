import React, { useState, useEffect } from "react";
import Player from "../player";
import Map from "../map";

export default function App() {
    const [tiles, setTiles] = useState([]);
    const [mapSize, setMapSize] = useState(10 * 32);

    useEffect(() => {
        fetch('http://localhost:8080/newGame', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setMapSize(data.gameMap.mapSize * 32);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [mapSize]);

    useEffect(() => {
        const _tiles = [];
        let id = 0;

        for (let y = 0; y < mapSize; y = y + 32) {
            const row = [];
            for (let x = 0; x < mapSize; x = x + 32) {
                row.push({ x, y, id: id++, v: { x: -32, y: -32 } });
            }
            _tiles.push(row);
        }
        setTiles(_tiles);
    }, [mapSize]);

    return (
        <div
            style={{
                position: "relative",
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: "grey",
                overflow: "hidden",
                border: "1px solid black",
            }}
        >

            <Map
                tiles={tiles}
                size={mapSize}
            />
            <Player skin="m1"/>
        </div>
    );
}