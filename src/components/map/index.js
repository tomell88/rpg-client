import React from "react";

export default function Map({ tiles, size }) {

    return (
        <div
            style={{
                boxSizing: "border-box",
                backgroundColor: "white",
                width: size,
            }}
        >
            {tiles.map((row) => (
                <div style={{ display: "flex" }}>
                    {row.map(() => (
                        <div
                            style={{
                                borderBottom: "1px solid #333",
                                borderRight: "1px solid #333",
                                width: 32,
                                height: 32,
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}