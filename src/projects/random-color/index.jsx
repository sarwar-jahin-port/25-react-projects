import React, { useState } from 'react'

export const RandomColor = () => {
    const [typeofColor, setTypeofColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleCreateRandomHexColor = () => {
        const hexCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hexCodes[randomColorUtility(hexCodes.length)];
        }
        setColor(hexColor);
    }

    const handleCreateRandomRgbColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const rgbColor = `rgb(${r},${g},${b})`
        setColor(rgbColor);
    }

    return (
        <div
            style={{
                width: "100%",
                height: "50vh",
                background: color
            }}
        >
            <button onClick={() => setTypeofColor("hex")} disabled={typeofColor === "hex" ? true : false}>Hex Color</button>
            <button onClick={() => setTypeofColor("rgb")} disabled={typeofColor === "rgb" ? true : false}>RGB Color</button>
            <button onClick={
                typeofColor === "hex"
                    ? handleCreateRandomHexColor
                    : handleCreateRandomRgbColor
            }>Generate Random Color</button>
            {
                <div>
                    <h2>{typeofColor === "hex" ? "HEX" : "RGB"}</h2>
                    <p>{color}</p>
                </div>
            }
        </div>
    )
}
